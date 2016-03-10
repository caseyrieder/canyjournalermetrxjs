/* add packages */
"  ongoworks:security "
"  juliancwirko:s-alert "
"  juliancwirko:s-alert-genie "
"  alanning:roles "

/* CLIENT-SIDE */
  // WHEN USER REGISTERS, ADD IMMEDIATELY AS NINJA & ASSIGN ROLE (ALL IN REGISTER JSX)
    Register = React.createClass({
  	register(e) {
  	  e.preventDefault();
  	  var user = {};
  	  user.email = $('#email').val();
  	  user.password = $('#password').val();
  	  user.firstName = $('#firstName').val();
  	  user.lastName = $('#lastName').val();
  	  Accounts.createUser({
  	          email: user.email,
  	          password: user.password
  	      }, function(error) {
  	    if (error) {
  	      sAlert.error(error.reason, {effect: 'genie', position: 'top'});
  	    } else {
  	      FlowRouter.go('/');
  	      var userId = Meteor.userId();
  	      Meteor.call('addNinja', user);
  	      Meteor.call('addRole', userId);
  	    }
  	      });
  	},
  	render() {
  		return (
  		  <div className="col-xs-12 col-sm-6">
  		    <h1>Register for NinjaTracker</h1>
  		    <form id="register-form" action="#" onSubmit={this.register}>
  		      <div className="form-group">
  		        <label htmlFor="firstName">First Name:</label>
  		        <input type="firstName" id="firstName" name="firstName" className="form-control"/>
  		      </div>
  		      <div className="form-group">
  		        <label htmlFor="lastName">Last Name:</label>
  		        <input type="lastName" id="lastName" name="lastName" className="form-control"/>
  		      </div>
  		      <div className="form-group">
  		        <label htmlFor="email">Email:</label>
  		        <input type="email" id="email" name="email" className="form-control"/>
  		      </div>
  		      <div className="form-group">
  		        <label htmlFor="password">Password:</label>
  		        <input type="password" id="password" name="password" className="form-control"/>
  		      </div>
  		      <div className="form-group">
  		        <button type="submit" className="btn btn-primary">Register</button>
  		      </div>
  		    </form>
  		  </div>
  		)
  	}
  });

/* BOTH/MODEL (LIB) */
    // USER METHOD -- adds leader if this is the 1st user, otherwise, just a ninja
    Meteor.methods({
      addRole(userId) {
        if (Meteor.users.find().count() === 1) {
          Roles.addUsersToRoles( userId, 'leader' );
        } else {
          Roles.addUsersToRoles( userId, 'ninjas' );
        }
      }
    });

/* BOTH/MODEL (LIB) */
    //NINJA COLLETION & METHODS & PUBLICATION--
    Ninjas = new Mongo.Collection('ninjas');

    var Schemas = {};
    // DEFINE SCHEMA, LINK IT TO A USERID
    Schemas.Ninja = new SimpleSchema({
      firstName: {
        type: String,
        label: "First Name",
        max: 25
      },

      lastName: {
        type: String,
        label: "Last Name",
        max: 25,
        index: true,
        unique: true
      },
      score: {
        type: Number,
        label: "Score",
        min: 0
      },
      status: {
        type: Boolean,
        label: "Status"
      },
      jobsCompleted: {
        type: Number,
        label: "Jobs Completed",
        min: 0
      },
      userId: {
        type: String
      }
    });

    Ninjas.attachSchema(Schemas.Ninja);

    Ninjas.helpers({
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    });

    Ninjas.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();

    Meteor.methods({
      addNinja(user) {
        if (! Meteor.userId()) {
            return
          }
          var ninja = {}
          ninja.firstName = user.firstName;
          ninja.lastName = user.lastName;
          ninja.score = 0;
          ninja.status = true;
          ninja.jobsCompleted = 0;
          ninja.userId = Meteor.userId();
          check(ninja, Ninjas.simpleSchema());
          Ninjas.insert({
            firstName: ninja.firstName,
            lastName: ninja.lastName,
            score: ninja.score,
            status: ninja.status,
            jobsCompleted: ninja.jobsCompleted,
            userId: ninja.userId
          });
      },
      // SERVER-SIDE METHOD
      addNinjaFromForm(ninja) {
        if (Meteor.isServer) {
          var newUser = Accounts.createUser({email: ninja.email, password: 'password'});
          Ninjas.insert({
              firstName: ninja.firstName,
              lastName: ninja.lastName,
              score: 0,
              status: true,
              jobsCompleted: 0,
              userId: newUser
          });
          Meteor.call('addRole', newUser);
        }
      },
      editNinja(ninja) {
        if (! Meteor.userId()) {
            return
          }
          Ninjas.update(ninja._id, {
            $set: {firstName: ninja.firstName, lastName: ninja.lastName}
          });
      },
      assignNinja(ninja) {
        if (! Meteor.userId()) {
            return
          }
          Ninjas.update(ninja, {
            $set: {status: false}
          });
      }
    });
    // Define server publications
    if (Meteor.isServer) {
      Meteor.publish('ninjas', function() {
        return Ninjas.find();
      });
      Meteor.publish('ninja', function(id) {
        return Ninjas.find({_id: id});
      });
      Meteor.publish('currentNinja', function(user) {
        return Ninjas.find({userId: user});
      });
    }


/* USE ROLES, & ASSIGN DIFFERENT NAVS, IN ROUTES */
    FlowRouter.route('/', {
      name: 'Dashboard',
      action() {
        if (Roles.userIsInRole( Meteor.userId(), 'ninjas')) {
          //var ninja = Ninjas.findOne({userId: Meteor.userId()});
          ReactLayout.render(App, {
            content: <Dashboard name="Dashboard" />,
            nav: <Nav />,
            //request: Requests.findOne({assignedNinja: ninja._id})
          })
        } else {
          ReactLayout.render(App, {
            content: <Dashboard name="Dashboard" />,
            nav: <Nav />
          })
        }
      }
    });
    // ...

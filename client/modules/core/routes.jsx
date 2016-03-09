import React from 'react';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor';

/* CORE COMPONENTS */
import Main from './layouts/Main.jsx';
import Home from './layouts/Home.jsx';

/* USER CONTAINERS */
import Register from '../users/containers/Register.js';
import Login from '../users/containers/Login.js';
// import Confirm from '../users/containers/Confirm.js';
// import Account from '../users/containers/Account.js';
// import PasswordReset from '../users/containers/PasswordReset.js';

/* LIST COMPONENTS */
import Workers from '../workers/components/Workers.jsx';
import Companies from '../companies/components/Companies.jsx';
import Buildings from '../buildings/components/Buildings.jsx';
import Inspections from '../inspections/components/Inspections.jsx';

/* DETAIL CONTAINERS */
import Worker from '../workers/containers/Worker.js';
import Company from '../companies/containers/Company.js';
import Building from '../buildings/containers/Building.js';
import Inspection from '../inspections/containers/Inspection.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Main);

/* HOME */
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

/* -------------------------------------------------
                USER ROUTES
------------------------------------------------- */
  // User Register/SignUp
  FlowRouter.route('/register', {
    name: 'users.register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });
  // User Login
  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
  // // User Confirm
  // FlowRouter.route('/confirm/:userId', {
  //   name: 'users.confirm',
  //   action({userId}) {
  //     mount(MainLayoutCtx, {
  //       content: () => (<Confirm />)
  //     });
  //   }
  // });
  // // User Account View & Edit
  // FlowRouter.route('/account/:userId', {
  //   name: 'users.account',
  //   action({userId}) {
  //     mount(MainLayoutCtx, {
  //       content: () => (<Account />)
  //     })
  //   }
  // });
  // // User Password Reset
  // FlowRouter.route('/passreset/:userId', {
  //   name: 'users.passreset',
  //   action({userId}) {
  //     mount(MainLayoutCtx, {
  //       content: () => (<PasswordReset />)
  //     })
  //   }
  // });
  // User Logout
  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });

/* -------------------------------------------------
                WORKER ROUTES
------------------------------------------------- */
  /// List of workers
  FlowRouter.route('/workers', {
    name: 'workers.all',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Workers />)
      });
    }
  });
  // Detail for single worker
  FlowRouter.route('/worker/:workerId', {
    name: 'workers.single',
    action({workerId}) {
      mount(MainLayoutCtx, {
        content: () => (<Worker workerId={workerId} />)
      });
    }
  });

/* -------------------------------------------------
                COMPANY ROUTES
------------------------------------------------- */
  // List of companies
  FlowRouter.route('/companies', {
    name: 'companies.all',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Companies />)
      });
    }
  });
  // Detail for single company
  FlowRouter.route('/company/:companyId', {
    name: 'companies.single',
    action({companyId}) {
      mount(MainLayoutCtx, {
        content: () => (<Company companyId={companyId} />)
      });
    }
  });

/* -------------------------------------------------
                BUILDING ROUTES
------------------------------------------------- */
  // List of buildings
  FlowRouter.route('/buildings', {
    name: 'buildings.all',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Buildings />)
      });
    }
  });
  // Detail for single building
  FlowRouter.route('/building/:buildingId', {
    name: 'buildings.single',
    action({buildingId}) {
      mount(MainLayoutCtx, {
        content: () => (<Building buildingId={buildingId} />)
      });
    }
  });

/* -------------------------------------------------
                INSPECTION ROUTES
------------------------------------------------- */
  // List of inspections
  FlowRouter.route('/inspections', {
    name: 'inspections.all',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Inspections />)
      });
    }
  });
  // Detail for single inspection
  FlowRouter.route('/inspection/:inspectionId', {
    name: 'inspections.single',
    action({inspectionId}) {
      mount(MainLayoutCtx, {
        content: () => (<Inspection inspectionId={inspectionId} />)
      });
    }
  });
}

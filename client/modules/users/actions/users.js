export default {
  // Create new user
  create({Meteor, LocalState, FlowRouter}, email, password) {
    // Handle empty email field
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }
    // Handle empty password field
    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }
    // Set error to null if email & password exist
    LocalState.set('CREATE_USER_ERROR', null);
    // Call createUser method on Accounts, then create this user in Workers, then route to home
    Accounts.createUser({email, password});
    FlowRouter.go('/');
  },
  // Login for existing user
  login({Meteor, LocalState, FlowRouter}, email, password) {
    // Handle empty email field
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }
    // Handle empty password field
    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }
    // Set error to null if emial & password exist
    LocalState.set('LOGIN_ERROR', null);
    // Call loginWithPassword & route to home
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

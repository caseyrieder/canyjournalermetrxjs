export default {
  // Create new user
  create({Meteor, LocalState, FlowRouter}, email, password) {
    // Handle empty fields
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }
    // Remove errors, register, & reroute to inspections page
    LocalState.set('CREATE_USER_ERROR', null);
    Accounts.createUser({email, password});
    FlowRouter.go('/inspections');
  },
  // Login for existing user
  login({Meteor, LocalState, FlowRouter}, email, password) {
    // Handle empty fields
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }
    // Remove errors, login, & reroute to inspections page
    LocalState.set('LOGIN_ERROR', null);
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/inspections');
  },
  // // Confirm just-registered user & add as worker
  // confirm({Meteor, LocalState, FlowRouter}, userId, first, last, role) {
  //   // Handle empty fields
  //   if (!first) {
  //     return LocalState.set('CONFIRM_ERROR', 'First name is required');
  //   }
  //   if (!last) {
  //     return LocalState.set('CONFIRM_ERROR', 'Last name is required');
  //   }
  //   if (!role) {
  //     return LocalState.set('CONFIRM_ERROR', 'Role is required');
  //   }
  //   // Remove errors, confirm user, & add user as worker
  //   LocalState.set('CONFIRM_ERROR', null);
  //   //ACTUALLY WANNA VERIFY THE EMAIL ADDRESS
  //   // Meteor.loginWithPassword(email, password);
  //   FlowRouter.go('/');
  // },
  // // Reset password for user
  // resetPwd(){},
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

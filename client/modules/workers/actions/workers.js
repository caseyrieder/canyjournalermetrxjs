export default {
  // Create new worker
  create({Meteor, LocalState, FlowRouter}, name, role, employer) {
    // Prevent creation unless user is logged in
    if (!Meteor.userId()) {
      return LocalState.set('CREATE_WORKER_ERROR', 'Must be logged in to create new worker.');
    }
    // Handle empty name field
    if (!name) {
      return LocalState.set('CREATE_WORKER_ERROR', 'Name required');
    }
    // Handle empty role field
    if (!role) {
      return LocalState.set('CREATE_WORKER_ERROR', 'Role required');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_WORKER_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on workers collection & handle error
    Meteor.call('addWorker', id, name, role, employer, (err) => {
      if (err) {
        return LocalState.set('CREATE_WORKER_ERROR', err.message);
      }
    });
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

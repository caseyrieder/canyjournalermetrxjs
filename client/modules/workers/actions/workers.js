export default {
  // Create new worker
  create({Meteor, LocalState, FlowRouter}, companyId, name, role) {
    // Handle empty name field
    if (!name || !role) {
      return LocalState.set('CREATE_WORKER_ERROR', 'Name required');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_WORKER_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on workers collection & handle error
    Meteor.call('workers.create', id, companyId, name, role, (err) => {
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

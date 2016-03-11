export default {
  // Create new worker
  create({Meteor, LocalState, FlowRouter}, companyId, name, role) {
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
    // For non-existent companies, (when it comes frmo user register) assign 'CANY'
    if (!companyId) {
      companyId = 'hFt7yEkjAuxnq6og3';
    }
    // Set error to null if text exists
    LocalState.set('CREATE_WORKER_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on workers collection & handle error
    Meteor.call('workers.create', id, name, role, companyId, Meteor.userId(), (err) => {
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

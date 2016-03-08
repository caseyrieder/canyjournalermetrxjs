export default {
  // Create new worker
  create({Meteor, LocalState, FlowRouter}, name, role) {
    // Handle empty name field
    if (!name) {
      return LocalState.set('CREATE_WORKER_ERROR', 'Name is required.');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_WORKER_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on workers collection & handle error
    Meteor.call('workers.create', id, name, role, (err) => {
      if (err) {
        return LocalState.set('CREATE_WORKER_ERROR', err.message);
      }
    });
    // Reroute to workers list
    FlowRouter.go('/workers');
  },
  // Create new worker with associated company
  addEmployee({Meteor, LocalState, FlowRouter}, companyId, name, role) {
    if (!companyId || !name) {
      return LocalState.set('CREATE_WORKER_ERROR', 'Name & company both required');
    }
    LocalState.set('CREATE_WORKER_ERROR', null);
    const id = Meteor.uuid();
    Meteor.call('companies.addEmployee', id, companyId, name, role, (err) => {
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

export default {
  // Create new company
  create({Meteor, LocalState, FlowRouter}, name, specialty) {
    // Handle empty name field
    if (!name) {
      return LocalState.set('CREATE_COMPANY_ERROR', 'Company name is required.');
    }
    // Set error to null if name exists
    LocalState.set('CREATE_COMPANY_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on companies collection & handle error
    Meteor.call('companies.create', id, name, specialty, (err) => {
      if (err) {
        return LocalState.set('CREATE_COMPANY_ERROR', err.message);
      }
    });
    // Reroute to companies list
    FlowRouter.go('/companies');
  },
  // // Create new worker with associated company
  // addEmployee({Meteor, LocalState, FlowRouter}, companyId, name, role) {
  //   if (!companyId || !name) {
  //     return LocalState.set('CREATE_WORKER_ERROR', 'Name & company both required');
  //   }
  //   LocalState.set('CREATE_WORKER_ERROR', null);
  //   const id = Meteor.uuid();
  //   Meteor.call('companies.addEmployee', id, companyId, name, role, (err) => {
  //     if (err) {
  //       return LocalState.set('CREATE_WORKER_ERROR', err.message);
  //     }
  //   });
  // },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

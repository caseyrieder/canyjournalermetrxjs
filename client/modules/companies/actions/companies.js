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
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

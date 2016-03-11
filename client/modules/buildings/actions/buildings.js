export default {
  // Create new building
  create({Meteor, LocalState, FlowRouter}, address, projectCode) {
    // Prevent creation unless user is logged in
    if (!Meteor.userId()) {
      return LocalState.set('CREATE_BUILDING_ERROR', 'Must be logged in to create new building.');
    }
    // Handle empty address or projectCode field
    if (!address || !projectCode) {
      return LocalState.set('CREATE_BUILDING_ERROR', 'Address & projectCode are both required.');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_BUILDING_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on buildings collection & handle error
    Meteor.call('buildings.create', id, address, projectCode, (err) => {
      if (err) {
        return LocalState.set('CREATE_BUILDING_ERROR', err.message);
      }
    });
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

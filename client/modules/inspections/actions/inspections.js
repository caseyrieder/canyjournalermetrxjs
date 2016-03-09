export default {
  // Create new inspection
  create({Meteor, LocalState, FlowRouter}, buildingId, title, content) {
    // Handle empty title or content field
    if (!title || !content) {
      return LocalState.set('CREATE_INSPECTION_ERROR', 'Title & content are both required.');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_INSPECTION_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on inspections collection & handle error
    Meteor.call('inspections.create', id, buildingId, title, content, (err) => {
      if (err) {
        return LocalState.set('CREATE_INSPECTION_ERROR', err.message);
      }
    });
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

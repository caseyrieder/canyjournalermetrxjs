export default {
  // Create new entry
  create({Meteor, LocalState, FlowRouter}, text) {
    // Handle empty text field
    if (!text) {
      return LocalState.set('CREATE_ENTRY_ERROR', 'Text is required.');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_ENTRY_ERROR', null);
    // Call create method on entries collection & handle error
    Meteor.call('entries.create', text, (err) => {
      if (err) {
        return LocalState.set('CREATE_ENTRY_ERROR', err.message);
      }
    });
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

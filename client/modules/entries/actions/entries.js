export default {
  // Create new entry
  create({Meteor, LocalState, FlowRouter}, title, content) {
    // Handle empty title or content field
    if (!title || !content) {
      return LocalState.set('CREATE_ENTRY_ERROR', 'Title & content are both required.');
    }
    // Set error to null if text exists
    LocalState.set('CREATE_ENTRY_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on entries collection & handle error
    Meteor.call('entries.create', id, title, content, (err) => {
      if (err) {
        return LocalState.set('CREATE_ENTRY_ERROR', err.message);
      }
    });
    // Reroute to entries list
    FlowRouter.go('/');
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

export default {
  // Create new inspection
  create({Meteor, LocalState, FlowRouter}, buildingId) {
    // Prevent creation unless user is logged in
    if (!Meteor.userId()) {
      return LocalState.set('CREATE_INSPECTION_ERROR', 'Must be logged in to create new inspection.');
    }
    // Count existing inspections for this building, & add 1
    if (Meteor.subscribe('inspections.building', buildingId).ready()) {
      const insCount = Collections.Inspections.find({buildingId}).count();
    } else {
      const insCount = Collections.Inspections.find({buildingId}).count();
    }
    if(!insCount) {
      const inspNum = 1;
    } else {
      const inspNum = insCount + 1;
    }
    // Assign logged in user as inspector
    const inspector = Meteor.userId();
    // Set error to null if text exists
    LocalState.set('CREATE_INSPECTION_ERROR', null);
    // Create uuid for latency compensation, via method in config/method_stubs
    const id = Meteor.uuid();
    // Call create method on inspections collection & handle error
    Meteor.call('inspections.create', id, buildingId, inspNum, inspector, (err) => {
      if (err) {
        return LocalState.set('CREATE_INSPECTION_ERROR', err.message);
      }
      console.log("Insp Num: " + inspNum);
      return LocalState.set('INSPECTION_COUNTER', inspNum);
    });
  },
  // Clear errors in LocalState
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

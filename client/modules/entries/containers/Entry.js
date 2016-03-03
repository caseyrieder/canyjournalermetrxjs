import Entry from '../components/Entry.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to 1-Entry & send as variable to composer
export const composer = ({context, entryId}, onData) => {
  const {Meteor, Collections} = context();
  // If entries.single subscription is not ready, try via entries sub
  if (Meteor.subscribe('entries.single', entryId).ready()) {
    const entry = Collections.Entries.findOne(entryId);
    onData(null, {entry});
  } else {
    const entry = Collections.Entries.findOne(entryId);
    if (entry) {
      onData(null, {entry});
    } else {
      onData();
    }
  }
};
// Komposer sends Entries collection data to EntryList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Entry);

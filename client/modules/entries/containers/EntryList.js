import EntryList from '../components/EntryList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to entries & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('entries.list').ready()) {
    const entries = Collections.Entries.find().fetch();
    onData(null, {entries});
  }
};
// Komposer sends Entries collection data to EntryList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(EntryList);

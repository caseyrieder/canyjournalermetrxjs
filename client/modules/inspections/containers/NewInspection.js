import NewInspection from '../components/NewInspection.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, gather error, if we get get-nullify error
export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_INSPECTION_ERROR');
  const inspNum = LocalState.get('INSPECTION_COUNTER');
  onData(null, {error, inspNum});
  // clearErrors when unmounting the component
  return clearErrors;
};
// Map action dependencies into context
export const depsMapper = (context, actions) => ({
  create: actions.inspections.create,
  clearErrors: actions.inspections.clearErrors,
  context: () => context
});
// Komposer sets context/errors & actions onto NewInspection component
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewInspection);

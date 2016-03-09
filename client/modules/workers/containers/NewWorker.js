import NewWorker from '../components/NewWorker.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, gather error, if we get get-nullify error
export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_WORKER_ERROR');
  onData(null, {error});
  // clearErrors when unmounting the component
  return clearErrors;
};
// Map action dependencies into context
export const depsMapper = (context, actions) => ({
  create: actions.workers.create,
  clearErrors: actions.workers.clearErrors,
  context: () => context
});
// Komposer sets context/errors & actions onto AddPerson component
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewWorker);

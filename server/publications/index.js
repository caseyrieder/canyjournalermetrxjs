import workers from './workers';
import companies from './companies';
import buildings from './buildings';
import inspections from './inspections';

export default function () {
  workers();
  companies();
  buildings();
  inspections();
}

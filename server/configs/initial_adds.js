import {Workers} from '/lib/collections';
import {Companies} from '/lib/collections';
import {Buildings} from '/lib/collections';
import {Inspections} from '/lib/collections';

export default function () {
  if (!Workers.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = 'Worker Num.${lc}';
      if (lc < 4) {
        const role = 'Project Manager!';
      } else {
        const role = 'Assistant Project Manager!';
      }
      const createdAt = new Date();
      Workers.insert({name, role, createdAt});
    }
  };
  if (!Companies.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = 'Company Num.${lc}';
      if (lc < 4) {
        const specialty = 'Roofing';
      } else {
        const specialty = 'Windows';
      }
      const createdAt = new Date();
      Companies.insert({name, specialty, createdAt});
    }
  };
  if (!Buildings.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const address = '${lc}0-8${lc} Broadway';
      const projectCode = 'Code: ${lc}${lc}${lc}.${lc}${lc}';
      const createdAt = new Date();
      Buildings.insert({address, projectCode, createdAt});
    }
  };
  if (!Inspections.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = 'Number: ${lc}';
      const content = 'Insp.${lc} has some BS content right here';
      const createdAt = new Date();
      Inspections.insert({title, content, createdAt});
    }
  }
}

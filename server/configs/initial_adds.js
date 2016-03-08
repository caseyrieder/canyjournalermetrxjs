import {Workers} from '/lib/collections';
import {Companies} from '/lib/collections';
import {Buildings} from '/lib/collections';
import {Inspections} from '/lib/collections';

export default function () {
  // Seed Workers
  if (!Workers.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = 'Worker Num.${lc}';
      const role = 'Assistant Project Manager!';
      const createdAt = new Date();
      Workers.insert({name, role, createdAt});
    }
  }
  // Seed Companies
  if (!Companies.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = 'Company Num.${lc}';
      const specialty = 'Roofing';
      const createdAt = new Date();
      Companies.insert({name, specialty, createdAt});
    }
  }
  // Seed Buildings
  if (!Buildings.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const address = '${lc}0-8${lc} Broadway';
      const projectCode = 'Code: ${lc}${lc}${lc}.${lc}${lc}';
      const createdAt = new Date();
      Buildings.insert({address, projectCode, createdAt});
    }
  }
  // Seed Inspections
  if (!Inspections.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = 'Number: ${lc}';
      const content = 'Insp.${lc} has some BS content right here';
      const createdAt = new Date();
      Inspections.insert({title, content, createdAt});
    }
  }
}

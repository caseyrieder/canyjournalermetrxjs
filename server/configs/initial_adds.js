import {Entries} from '/lib/collections';
import {Companies} from '/lib/collections';

export default function () {
  if (!Entries.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the entry title: ${lc}`;
      const content = `Entry ${lc}'s content is great!`;
      Entries.insert({title, content});
    }
  };
  if (!Companies.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = `This is the company name: ${lc}`;
      const specialty = `Company ${lc}'s specialty is great!`;
      Companies.insert({name, specialty});
    }
  }
}

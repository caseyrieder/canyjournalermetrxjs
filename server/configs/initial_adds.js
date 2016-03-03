import {Entries} from '/lib/collections';

export default function () {
  if (!Entries.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the entry title: ${lc}`;
      const content = `Entry ${lc}'s content is great!`;
      Entries.insert({title, content});
    }
  }
}

import {Companies} from '/lib/collections';
import {Buildings} from '/lib/collections';
// import {Workers} from '/lib/collections';
// import {Inspections} from '/lib/collections';

export default function () {
  // Seed Companies
  if (!Companies.findOne()) {
    Companies.insert({name: 'CANY', specialty: 'Architecture', createdAt: new Date()});
    Companies.insert({name: 'Rally Restoration', specialty: 'Waterproofing', createdAt: new Date()});
    Companies.insert({name: 'Skyline Restoration', specialty: 'Roofing', createdAt: new Date()});
  }
  // Seed Buildings
  if (!Buildings.findOne()) {
    Buildings.insert({address: '30-30 47th Avenue', projectCode: '1243791', createdAt: new Date()});
    Buildings.insert({address: '215 West 109th Street', projectCode: '6594037', createdAt: new Date()});
    Buildings.insert({address: '14 Wall Street', projectCode: '4567859', createdAt: new Date()});
  }
  // Seed Workers
  // Seed Inspections
}

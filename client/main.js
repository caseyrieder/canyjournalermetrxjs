import {createApp} from 'mantra-core';
import initContext from './configs/context';
// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import workersModule from './modules/workers';
import companiesModule from './modules/companies';
import buildingsModule from './modules/buildings';
import inspectionsModule from './modules/inspections';
// init context
const context = initContext();
// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(workersModule);
app.loadModule(companiesModule);
app.loadModule(buildingsModule);
app.loadModule(inspectionsModule);
app.init();

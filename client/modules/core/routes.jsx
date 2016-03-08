import React from 'react';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor';
// Primary layouts for routing
import Main from './layouts/Main.jsx';
import Home from './layouts/Home.jsx';
// User containers for routing
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
// Worker containers for routing
import WorkerList from '../workers/containers/WorkerList.js';
import Worker from '../workers/containers/Worker.js';
import NewWorker from '../workers/containers/NewWorker.js';
// Company containers for routing
import CompanyList from '../companies/containers/CompanyList.js';
import Company from '../companies/containers/Company.js';
import NewCompany from '../companies/containers/NewCompany.js';
// Building containers for routing
import BuildingList from '../buildings/containers/BuildingList.js';
import Building from '../buildings/containers/Building.js';
import NewBuilding from '../buildings/containers/NewBuilding.js';
// Inspection containers for routing
import InspectionList from '../inspections/containers/InspectionList.js';
import Inspection from '../inspections/containers/Inspection.js';
import NewInspection from '../inspections/containers/NewInspection.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Main);
/* HOME */
  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
/* INSPECTIONS ROUTES */
  // Home (inspections list)
  FlowRouter.route('/', {
    name: 'inspections.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<InspectionList />)
      });
    }
  });
  // Single inspection
  FlowRouter.route('/inspection/:inspectionId', {
    name: 'inspections.single',
    action({inspectionId}) {
      mount(MainLayoutCtx, {
        content: () => (<Inspection inspectionId={inspectionId} />)
      });
    }
  });
  // New inspection
  FlowRouter.route('/new-inspection', {
    name: 'newInspection',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewInspection />)
      });
    }
  });

/* USERS ROUTES */
  // User Register/SignUp
  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });
  // User Login
  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
  // User Logout
  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });

/* WORKERS ROUTES */
  // Workers list
  FlowRouter.route('/workers', {
    name: 'workers.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<WorkerList />)
      });
    }
  });
  // Single worker
  FlowRouter.route('/worker/:workerId', {
    name: 'workers.single',
    action({workerId}) {
      mount(MainLayoutCtx, {
        content: () => (<Worker workerId={workerId} />)
      });
    }
  });
  // New worker
  FlowRouter.route('/new-worker', {
    name: 'newWorker',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewWorker />)
      });
    }
  });

/* COMPANIES ROUTES */
  // Companies list
  FlowRouter.route('/companies', {
    name: 'companies.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CompanyList />)
      });
    }
  });
  // Single company
  FlowRouter.route('/company/:companyId', {
    name: 'companies.single',
    action({companyId}) {
      mount(MainLayoutCtx, {
        content: () => (<Company companyId={companyId} />)
      });
    }
  });
  // New company
  FlowRouter.route('/new-company', {
    name: 'newCompany',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewCompany />)
      });
    }
  });

/* BUILDINGS ROUTES */
  // Buildings list
  FlowRouter.route('/buildings', {
    name: 'buildings.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BuildingList />)
      });
    }
  });
  // Single building
  FlowRouter.route('/building/:buildingId', {
    name: 'buildings.single',
    action({buildingId}) {
      mount(MainLayoutCtx, {
        content: () => (<Building buildingId={buildingId} />)
      });
    }
  });
  // New building
  FlowRouter.route('/new-building', {
    name: 'newBuilding',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewBuilding />)
      });
    }
  });
}

import React from 'react';
import {mount} from 'react-mounter';
// Primary layouts for routing
import Layout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
// User containers for routing
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
// Entry containers for routing
import EntryList from '../entries/containers/EntryList.js';
import Entry from '../entries/containers/Entry.js';
import NewEntry from '../entries/containers/NewEntry.js';
// Company containers for routing
import CompanyList from '../companies/containers/CompanyList.js';
import Company from '../companies/containers/Company.js';
import NewCompany from '../companies/containers/NewCompany.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  // Home (entries list)
  FlowRouter.route('/', {
    name: 'entries.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EntryList />)
      });
    }
  });
  // Single entry
  FlowRouter.route('/entry/:entryId', {
    name: 'entries.single',
    action({entryId}) {
      mount(MainLayoutCtx, {
        content: () => (<Entry entryId={entryId} />)
      });
    }
  });
  // New entry
  FlowRouter.route('/new-entry', {
    name:'newEntry',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewEntry />)
      })
    }
  });
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
    name:'newCompany',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewCompany />)
      })
    }
  });
}

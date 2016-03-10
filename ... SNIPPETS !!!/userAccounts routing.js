import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import '../../ui/accounts/accounts-templates.js'; // Overrides accounts templates

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});


///////////////////////
useraccounts-configuration.js: (directly beside routes.js)
----
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { TAPi18n } from 'meteor/tap:i18n';

AccountsTemplates.configure({
  showForgotPasswordLink: true,
  texts: {
    errors: {
      loginForbidden: TAPi18n.__('Incorrect username or password'),
      pwdMismatch: TAPi18n.__('Passwords don\'t match'),
    },
    title: {
      signIn: TAPi18n.__('Sign In'),
      signUp: TAPi18n.__('Join'),
    },
  },
  defaultTemplate: 'Auth_page',
  defaultLayout: 'App_body',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {},
});

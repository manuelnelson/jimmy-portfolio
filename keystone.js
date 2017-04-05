// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load().config({silent:true});

// Require keystone
var keystone = require('keystone'),
	handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Jimmy Watkins',
	'brand': 'Jimmy Watkins',

	'sass': 'public',
	'static': ['public','dist'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,

	'emails': 'templates/emails',

	'auto update': true,
	'auth': true,
	'user model': 'N',
	'cookie secret': 'I8J8PQCTi(X7_k~*[O:(P*4;^c(TB*n4Cx0#u,4D/FwJgVN7Ja>|1~FrWD+y/<@,'

});

keystone.set('session store','mongo');


// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'ns': 'ns'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();

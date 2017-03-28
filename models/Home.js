/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

Home.add({
	name: { type: String, required: true },
	carousel: { type: Types.Relationship, ref: 'Slide', many: true},
	about: { type: Types.Html, wysiwyg: true },
	backgroundImage: { type: Types.CloudinaryImage },
});

Home.defaultColumns = 'name, state|20%';
Home.register();

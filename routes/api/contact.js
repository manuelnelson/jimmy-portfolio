/**
 * Created by manny on 6/24/15.
 */
var async = require('async'),
	keystone = require('keystone'),

exports = module.exports = function(req, res) {
	var contact = {
		name:req.body.name,
		email:req.body.email,
		phone:'',
		message:req.body.message
	};
	keystone.list('Enquiry').model(
		contact
	).save(function(err){
			if (err) return res.status(500).json({ success: false, err: err });

			return res.json({success:true});
		})
};

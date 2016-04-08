var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/guitarists');

var guitaristSchema = new mongoose.Schema({
	firstName: { type: String, default: '' },
	lastName: { type: String, default: '' },
	guitarMake: { type: String, default: '' },
	guitarModel: {type: String, default: ''}
});

module.exports = mongoose.model('Guitarist', guitaristSchema);

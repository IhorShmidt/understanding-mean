const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var companySchema = new Schema({
    parent: {type: Schema.Types.ObjectId, ref: 'parent', defaul: {}}, 
    name: { type: String, required: true ,lowercase: true},
    income: {type: Number},
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;



const mongoose = require('mongoose');

const jobsSchema = mongoose.Schema({
    description : String,
    company : String,
    company_address : String,
},{
    timestamps : true
});

module.exports = mongoose.model('Jobs',jobsSchema);
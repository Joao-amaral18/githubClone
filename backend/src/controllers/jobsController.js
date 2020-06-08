const mongoose = require('mongoose');
const Jobs = mongoose.model('Jobs');

module.exports = {
    async store(req,res){
        const response = await Jobs.create(req.body);
        res.json(response);
    },
    async listJobs(req,res){
        const response = await Jobs.find();
        res.json(response);
    }
}
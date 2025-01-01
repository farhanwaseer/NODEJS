const mongoose = require('mongoose');
const config = require("config");

const dbgr = require("debug")("development:mongoose");


const uri = `${config.get("MONGODB_URI")}/scatch`; 

mongoose.connect(uri)
.then(() => {
    dbgr('Connected to MongoDB using Mongoose');
})
.catch((err) => dbgr('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;

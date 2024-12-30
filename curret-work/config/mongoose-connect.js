const mongoose = require('mongoose');


const uri = 'mongodb://127.0.0.1:27017/scatch'; 

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB using Mongoose'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;

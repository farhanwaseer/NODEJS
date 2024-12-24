const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/mongopractice';
// const uri = `mongodb+srv://farhanaliwaseer:BwF3GSsMcCbEcOYe@cluster0.zanow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB using Mongoose..'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    image: String
});

module.exports = mongoose.model("user", userSchema);
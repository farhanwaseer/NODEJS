const mongoose = require('mongoose');

const uri = "mongodb+srv://farhanaliwaseer:KDWdlSRJ9aq4Ne5e@authtestapp.k9d4z.mongodb.net/?retryWrites=true&w=majority&appName=authtestapp";

// mongoose.connect(`mongodb://127.0.0.1:27017/authtestapp`});

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB using Mongoose..'))
.catch((err) => console.error('Error connecting to MongoDB:', err));


const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("user", userSchema);
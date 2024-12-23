const mongoose = require("mongoose");

const uri = "mongodb+srv://farhanaliwaseer:b4T9y8VsjS5kMJzB@miniapp.bn8g8.mongodb.net/?retryWrites=true&w=majority&appName=miniapp";

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB using Mongoose..'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: String,
    password: String,
    profilepic:  {
        type: String,
        default: "default.png"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});


module.exports = mongoose.model("user", userSchema);
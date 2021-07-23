var mongoose =require('mongoose')

var userSchema = mongoose.Schema({
    lastName : String,
    email : String,
    password : String,
    token : String
});

var UserModel = mongoose.model('users', userSchema)

module.exports = UserModel;
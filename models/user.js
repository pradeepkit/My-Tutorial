// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const config = require('../config/database');

// //User Schema
// const UserSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
 
// const User = module.exports = mongoose.model('User', UserSchema);

// module.exports.getUserById = function(id, callback){
//     User.findById(id, callback);
// }
//  module.exports.getUserByUsername = function(username, callback){
//      const query = {username: username}
//      User.findOne(query, callback);
//  }
//  module.exports.addUser = function(newUser, callback){
//      bcrypt.genSalt(10, (err, salt) => {
//          bcrypt.hash(newUser.password, salt, (err, hash) => {
//              if(err) throw err;
//              newUser.password = hash;
//              newUser.save(callback);
//              console.log("user gernerate successfully");
//          });
//      });
//  }

//  module.exports.comparePassword = function(condidatePassword, hash, callback){
//      bcrypt.compare(condidatePassword, hash, (err, isMatch) => {
//          if(err)throw err;
//          callback(null, isMatch);
//      });
//  }
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    name : {type:String, require:true},
    email : {type:String, require:true},
    username: {type:String, require:true},
    password:{type:String, require:true}
    
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',schema);
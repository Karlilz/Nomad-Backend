const mongoose = require('../database/connection');

const UserLogInSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required:true}
});

const UserLogIn = mongoose.model('UserLogIn', UserLogInSchema);

module.exports = UserLogIn;


// const mongoose = require('../database/connection');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, min: 4, unique: true },
//   password: { type: String, required: true },
//   // Add other user-related fields here (e.g., email, name, etc.)
// });

// // Hash the password before saving it to the database
// UserSchema.pre('save', async function (next) {
//   try {
//     // Generate a salt and hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Compare the provided password with the stored hashed password
// UserSchema.methods.comparePassword = async function (candidatePassword) {
//   try {
//     const isMatch = await bcrypt.compare(candidatePassword, this.password);
//     return isMatch;
//   } catch (error) {
//     return false;
//   }
// };

// const User = mongoose.model('User', UserSchema);

// module.exports = User;



const mongoose = require('../database/connection');

const PostUserSchema = new mongoose.Schema({
    title: String,
    username: String,
    location: String,
    image: String,
    caption: String,
});

const PostUser = mongoose.model('PostUser', PostUserSchema);

module.exports = PostUser;
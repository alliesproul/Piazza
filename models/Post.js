// Post.js

const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:String,
    description:String,
    likes: 
        {type:Number, 
        default:0 },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'User' }
})

module.exports = mongoose.model('posts',postSchema)
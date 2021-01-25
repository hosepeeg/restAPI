// this is where you create the scheema, this schema represents how the post looks, title, string, descriptiom

const mongoose = require('mongoose');
//this the posts model, this is how the data base will display and accept post info
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        Required: true
    },
    description: {
        type: String,
        Required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});


module.exports = mongoose.model('Posts', PostSchema);

//dependencies //straight from docs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creates schema
const paintingSchema = new Schema({
    paintingName: {
        type: String
    },
    painter: {
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    likes: {
        type: Number,
        default: 0
    },
    value: {
        type: Number,
        default: 0
    },
    src: {
        type: String,
        default: ""
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    galleryShowing: {
        type: Boolean,
        default: true
    }   

});

//models our collection
const Painting = mongoose.model('Painting', paintingSchema);

module.exports =Painting;
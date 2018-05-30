var mongoose = require("mongoose");

var hotelSchema = mongoose.Schema({
    price: { type: String },
    name: { type: String },
    location: { type: String },
    description: { type: String },
    rating:{type:Number},
    availableRooms:{type:Number}
});

mongooe.model('hotel',hotelSchema)

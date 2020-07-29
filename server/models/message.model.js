const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    group:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})

const Message=mongoose.model('Message',messageSchema)
module.exports= Message;
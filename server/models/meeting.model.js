const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetSchema = new Schema({
    group:{
        type:String,
        required:true
    },
    meetname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    takes:{
        type:[],
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})

const Meeting=mongoose.model('Meeting',meetSchema)
module.exports= Meeting;
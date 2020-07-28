const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetSchema = new Schema({
    meetname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    alco:{
        type:[],
        required:false
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
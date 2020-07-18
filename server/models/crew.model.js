const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const crewSchema = new Schema({
    crewname:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    members:{
        type:Array,
        required:true
    },
    heads:{
        type:Array,
        required:true
    }
},{
    timestamps:true,
})

const Crew=mongoose.model('Crew',crewSchema)
module.exports= Crew;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true)
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})

const User=mongoose.model('User',userSchema)
module.exports= User;
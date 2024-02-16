const mongoose=require('mongoose');
const{isEmail}=require('validator');

const RequestSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
})

const Requests=mongoose.model('requests',RequestSchema);

module.exports=Requests
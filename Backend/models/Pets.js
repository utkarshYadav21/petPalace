const mongoose=require('mongoose');

const petSchema=mongoose.Schema({
    image:{
        type:String,

    },
    petType:{
        type:String,
        required:true   
    },
    breed:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
    },
    petOwner:{
        type:String,
        required:true
    },
    petDescription:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
const Pets=mongoose.model("pets",petSchema);

module.exports=Pets;
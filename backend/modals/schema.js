const mongoose=require('mongoose');
const validator= require('validator');

const dataSchema= new mongoose.Schema({
   username: {
        type:String,
        required:true,   
    },
    email:{
        type:String,
        required:true,
        unique:[true,"user is already present"],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('invalid Email Id')
            }
        }
    },
    number: {
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const userSchema= new mongoose.model('ecomLogin',dataSchema)
module.exports=userSchema;
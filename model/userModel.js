const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    
},{timestamps:true})

module.exports=mongoose.model('userSchema',userSchema);
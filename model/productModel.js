const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    productPrice:{
        type:Number,
        require:true
    },
    productQuantity:{
        type:Number,
        require:true
    },
    productDescription:{
        type:String,
        require:true
    },
    isDeleted:{
        type:Number,
        default:0,
        require:true
    },
    edit:{
        type:Number,
        
        require:true
    },
    productImage:{
        type:Array,
        
    }
},{timestamps:true})

module.exports=mongoose.model('product',productSchema);
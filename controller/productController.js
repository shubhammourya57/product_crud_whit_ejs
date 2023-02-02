const productModel = require("../model/productModel")

exports.getProduct = async(req, res)=>{
    try{
        let getAllProduct = await productModel.find({isDeleted:0})
        return res.render("productTable",{allData: getAllProduct, title:"product List",isAuth:req.session.isLogin})
    }catch(error){
        console.log(error)
    }
}

exports.getAddProduct = async(req,res) => {
    try {
        return res.render('productForm',{title:"add Product",isAuth:req.session.isLogin})
    } catch (error) {
        console.log(error)
    }
}

exports.addProduct = async(req,res) => {
    try {
        console.log(req.file,"<======file")
        const addData = await productModel.create({
            productName:req.body.pn,
            productPrice:req.body.pp,
            productQuantity:req.body.pq,
            productDescription:req.body.pd,
            productImage:req.file
            
        })
        if(addData){
            return res.redirect('/product/productList')
        }{
            return res.redirect('/product/getAddProduct')
        }
    } catch (error) {
        console.log(error)
    }
}
exports.delete = async (req,res) =>{
    try {
        let product_id = req.body.product_id
        const deleteData = await productModel.findByIdAndUpdate({_id:product_id},{isDeleted:1})
        if(deleteData){
            return res.redirect('/product/productList')
        }
    } catch (error) {
        
    }
}
exports.getEditProduct = async (req,res) => {
    try {let product_id = req.body.product_id
        const editData = await productModel.findById({_id:product_id})
        console.log(editData)
        if(editData){
            return res.render('edit',{editData:editData, title:"edit Product",isAuth:req.session.isLogin})
        }
        {
            return res.render('productForm')
        }
    } catch (error) {
        console.log(error)
    }
}
exports.editProduct = async (req,res) => {
    try {
        let product_id = req.body.product_id;
         let productName = req.body.pn;
       let productPrice = req.body.pp;
       let productQuantity =req.body.pQ;
       let productDescription =req.body.pd;
      

       
       const editData = await productModel.findByIdAndUpdate({_id:product_id},{
        productName:productName,
        productPrice:productPrice,
        productQuantity:productQuantity,
        productDescription:productDescription
        })
if(editData){
    return res.render('edit')
}

    } catch (error) {
      console.log(error)  
    }
}

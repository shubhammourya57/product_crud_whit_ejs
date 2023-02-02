const userModel = require("../model/userModel")
const bcrypt = require("bcryptjs")

exports.getLogin = async(req, res) =>{
    try{
        return res.render("login", {title:"Login",isAuth:req.session.isLogin})
    }catch(err){
        console.log(err)
    }
}

exports.getSignup = async(req, res) =>{
    try{
        return res.render("signup", {title:"Signup",isAuth:req.session.isLogin})
    }catch(err){
        console.log(err)
    }
}

exports.signup = async (req, res) =>{
    try{
        const hash = bcrypt.hashSync(req.body.password, 8);
        const data = await userModel.create({
            name:req.body.name,
            email:req.body.email,
            password:hash,
            mobile:req.body.mobile
        })
        if(data){
            return res.redirect("/")
        }
        return res.redirect("/signup")
    } catch(error){
        console.log(error)
    }
}

exports.login = async (req, res) => {
    
    const email = req.body.email
    const password = req.body.password
    const findEmail = await userModel.findOne({email:email})
    console.log(findEmail)
    if(findEmail){
        let isMatch = await bcrypt.compare(password, findEmail.password)
        console.log(isMatch)
        if(isMatch){
            req.session.isLogin = true;
            req.session.user = findEmail
            let mysession = await req.session.save()
            console.log(mysession,"<========myssss")
            return res.redirect("/product/productList")   
            }
        return res.redirect("/")
    }
    return res.redirect("/getSignup")
}

exports.logOut = async (req,res)=>{
    try {
        console.log('logout')
        req.session.destroy()
        return res.redirect('/')
       
    } catch (error) {
     console.log(error)   
    }
}
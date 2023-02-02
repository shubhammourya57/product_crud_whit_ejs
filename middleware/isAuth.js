module.exports = async(req,res,next)=>{
    if(!req.session.isLogin){
        return res.redirect('/')
    }
    next()
    
}
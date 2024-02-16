const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    let token=req.headers['authorization'];
    if(token){
        token=token.split(' ')[1];
        jwt.verify(token,"pet_adoption",(err,decodedToken)=>{
            if(err){
                console.log(err.message);
            }
            else{
                next()
            }
        })
    }
    else{
        console.log("please add token");
    }
}

module.exports= verifyToken;
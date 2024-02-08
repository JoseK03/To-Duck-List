import jwt  from "jsonwebtoken";
import { SECRECT_KEY } from "../config.js";

export const authRequired = (req,res, next) =>{

    const {token} = req.cookies
    if(!token)
        return res.status(401).json({message:'No token, autorizacion denegada'})

        jwt.verify(token, SECRECT_KEY, (err, user) =>{
            if(err) return res.status(401).json({message:'token invalido'})
        
            req.user = user

            next();
        })
    
}
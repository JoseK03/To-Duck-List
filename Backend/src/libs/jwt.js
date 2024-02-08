import jwt from "jsonwebtoken"
import { SECRECT_KEY } from "../config.js";

export function createAccesToken(payload){

   return new Promise((resolve, reject) => {
    jwt.sign(
        payload,
        SECRECT_KEY,
        {
            expiresIn: '1d'
        },
        (err, token) => {
            if(err) reject(err)
            resolve(token)
        }
    )
   });
}
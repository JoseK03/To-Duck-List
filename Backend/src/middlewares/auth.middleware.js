import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';

export const authtenticateUser = (req, res ,next) => {
    
    const token = req.cookies.token; //obtenemos el token de la cookie

    if(!token){
        return res.status(401).json({message : 'Acceso no autorizado. Token no proporcionado'});
    }

    try {
        //verificar Token
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({ message : 'Acceso no autorizado. Token inválido.'})
    }
}


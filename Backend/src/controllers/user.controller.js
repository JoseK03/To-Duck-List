import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";


export const registerUser = async (req,res) => {
   const {email, username, password} = req.body

   try {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password : passwordHash
        });
        const newUser =  await user.save();
        const token = await createAccessToken({id : newUser._id})  
        res.cookie('token', token);
        res.json({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email
        });
   } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Ha ocurrido un error al registrar el usuario.'})
   }
}

export const login = async (req, res) => {
    const {email, password} = req.body

    try {
        const userFound = await User.findOne({email});
        if(!userFound) res.status(400).json({message : 'Usuario no encontrado.'});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) res.status(400).json({message : 'Contraseña incorrecta'});

        const token = await createAccessToken({id: userFound._id});
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            message : `Bienvenido ${userFound.username}`
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Ha ocurrido un error al iniciar sesión.'})
    }
}

export const logout = (req,res) => {
    res.cookie('token', "", {expires : new Date(0)});
    return res.status(200).json({message : 'Sesion finalizada, vuelva pronto.'})
}

export const profile = async(req, res) => {

    try {
        const userExists = await User.exists({ _id: req.user.id });
        if (!userExists) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const userFound = await User.findById(req.user.id);
        
        return res.status(200).json({
            id: userFound._id,
            username : userFound.username,
            email: userFound.email
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message : 'Error al obtener el perfil del usuario.'})
    }
}
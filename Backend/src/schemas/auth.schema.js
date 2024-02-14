 import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'nombre de usuario es requerido'
    }), 
    email: z.string({
        required_error: 'El correo es requerido'
    }).email({
        message : 'Correo invalido'
    }),
    password : z.string({
        required_error : 'La constraseña es requerida'
    }).min(6,{
        message : 'La contraseña debe contener minimo 6 caracteres'
    })
 })

export const loginSchema=  z.object({
    email: z.string({
        required_error: 'El correo es requerido'
    }).email({
        message : 'Correo invalido'
    }),
    password : z.string({
        required_error : 'La constraseña es requerida'
    }).min(6,{
        message : 'La contraseña debe contener minimo 6 caracteres'
    })
 })
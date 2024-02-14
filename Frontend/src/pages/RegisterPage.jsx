import React from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const RegisterPage = () => {
    
    const {register, handleSubmit} = useForm()
    const {singup, user} = useAuth();


  return (
    <>
        <form onSubmit={handleSubmit(async(values) => {
                singup(values);
                console.log(user);
            })}>
            <input type="text" {...register('username',{required: true})}placeholder='username' />
            <input type="email" {...register('email',{required: true})} placeholder='email' />
            <input type="password" {...register('password',{required: true})} placeholder='password'/>
            <button type='submit'>Registrar</button>
        </form>
    </>
  )
}

export default RegisterPage
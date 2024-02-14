import React from 'react'
import {useForm} from 'react-hook-form'
import { registerRequest } from '../api/auth'
const RegisterPage = () => {
    
    const {register, handleSubmit} = useForm()


  return (
    <>
        <form onSubmit={handleSubmit(async(values) => {
            console.log(values);
            const res = await registerRequest(values);
            console.log(res);
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
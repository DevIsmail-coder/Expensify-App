
import './Signup.css'
import { SignupSchema } from '../../schema/SignupSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
// import { Landcontext } from '../Contexts'
import { LuDelete } from "react-icons/lu";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const url = 'https://expensify-76dn.onrender.com/api/v1'
const Signup = () => {
     const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(SignupSchema),
    })

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post(`${url}/user`, data)
            console.log('success', response.data)
            setLoading(false)
            localStorage.setItem('userEmail', response?.data?.data?.id)
            navigate("/profile")
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='Signupbody'>
            <div className='Signupmain'>
                <div className='Signuphead'>
                    <h3 className='Signupmainheader'>Expensify</h3>
                   <span className='Signupbodyicons'> <LuDelete  onClick={() => navigate("/")}/></span>
                </div>
                <article className='Signupcontainer'>
                    <h3 className='Signupcontainerh3'>Signup</h3>
                    <p className='Signincontainerp2'>Sign in by filling your correct infomation</p>
                </article>
                <form className='Signupcontainer2' onSubmit={handleSubmit(onSubmit)}>
                    <span className='SignupInputWrappper'>
                        <input type='text' placeholder='First Name' className='Signupcontainer2input' {...register("firstName")} />
                        <p className='SignupInputWrappperError'>{errors?.firstName?.message}</p>
                    </span>
                    <span className='SignupInputWrappper'>
                        <input type='text' placeholder='Last Name' className='Signupcontainer2input' {...register("lastName")} />
                        <p className='SignupInputWrappperError'>{errors?.lastName?.message}</p>
                    </span>
                    <span className='SignupInputWrappper'>
                        <label className='Signupcontainer2tag'>Email</label>
                        <input type='text' placeholder='Email' className='Signupcontainer2input' {...register("email")} />
                        <p className='SignupInputWrappperError'>{errors?.email?.message}</p>
                    </span>
                    <span className='SignupInputWrappper'>
                        <label className='Signupcontainer2tag'>Phone Number</label>
                        <input type='number' className='Signupcontainer2input' {...register("phoneNumber")} />
                        <p className='SignupInputWrappperError'>{errors?.phoneNumber?.message}</p>
                    </span>
                    <span className='SignupInputWrappper'>
                        <label className='Signupcontainer2tag'>gender</label>
                        <input type='text' className='Signupcontainer2input' {...register("gender")} />
                        <p className='SignupInputWrappperError'>{errors?.gender?.message}</p>
                    </span>
                    <main className='signupgender'>
                        <p className='Signupcontainer2ptag'>Already have an account? <span className='Signupcontainer2span'>Login</span></p>
                     { loading ? "Loading..." :  <button className='signupcontainer2divbut'> Submit</button> }
                    </main>
                </form>
                <p className='signupcontainer3'>By signing in you agree to our <span className='signupcontainer3span'>terms</span>
                    and <span className='signupcontainer3span'> conditions</span> </p>
            </div>
        </div>
    )
}

export default Signup

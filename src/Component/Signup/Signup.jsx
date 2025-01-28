import React, { useContext } from 'react'
import './Signup.css'
import { SignupSchema } from '../../schema/SignupSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Landcontext } from '../Contexts'

const Signup = () => {
    const {setShowPage} = useContext(Landcontext)

   const {register, handleSubmit, formState: {errors},} = useForm({
        resolver: yupResolver(SignupSchema),
    })
    const onSubmit = (data) => console.log(data)

  return (
    <div className='Signupbody'>
       <div className='Signupmain'>
         <h3 className='Signupmainheader'>Expensify</h3>
         <article className='Signupcontainer'>
            <h3 className='Signupcontainerh3'>Signup</h3>
            <p className='Signincontainerp2'>Sign in by filling your correct infomation</p>
            </article>
            <form className='Signupcontainer2' onSubmit={handleSubmit(onSubmit)}>
               <span className='SignupInputWrappper'>
               <input type='text' placeholder='First Name' className='Signupcontainer2input' {...register("first_name")}/>
               <p className='SignupInputWrappperError'>{errors?.first_name?.message}</p>
               </span>
                <span className='SignupInputWrappper'>
                <input type='text' placeholder='Last Name' className='Signupcontainer2input' {...register("last_name")} />
                <p className='SignupInputWrappperError'>{errors?.last_name?.message}</p>
                </span>
               <span className='SignupInputWrappper'>
               <label className='Signupcontainer2tag'>Email</label>
               <input type='text' placeholder='Email' className='Signupcontainer2input' {...register("email")}/>
               <p className='SignupInputWrappperError'>{errors?.email?.message}</p>
               </span>
                 <span className='SignupInputWrappper'>
                    <labe className='Signupcontainer2tag'>Phone Number</labe>
                <input type='number'  className='Signupcontainer2input' {...register("phone_number")}/>
                <p className='SignupInputWrappperError'>{errors?.phone_number?.message}</p>
                 </span>
                <span className='SignupInputWrappper'>
                <labe className='Signupcontainer2tag'>Password</labe>
                <input type='password'  className='Signupcontainer2input' {...register("password")}/>
                <p className='SignupInputWrappperError'>{errors?.password?.message}</p>
                </span>
                <p className='Signupcontainer2ptag'>Already have an account? <span className='Signupcontainer2span'>Login</span></p>
                <main className='signupgender'>
                    <h3 className='signupgenderhead'>Gender</h3>
                    <article className='signupgendercontainer'>
                        <span className='signupgendercontainerdiv'>
                            <p>Male</p>
                            <button className='signupgendercontainerdivbut'></button>
                        </span>
                        <span className='signupgendercontainerdiv'>
                            <p>Female</p>
                            <button className='signupgendercontainerdivbut'></button>
                        </span>
                        <main className='Signupcontainer2div'>
                    <p className='Signupcontainer2divtag' onClick={() => setShowPage("")}>Cancel</p>
                    <button className='signupcontainer2divbut'>NEXT</button>
                </main>
                    </article>
                </main>
            </form>
            <p className='signupcontainer3'>By signing in you agree to our <span className='signupcontainer3span'>terms</span> 
            and <span className='signupcontainer3span'> conditions</span> </p>
   </div>
    </div>
  )
}

export default Signup

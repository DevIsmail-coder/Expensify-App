
import './Login.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup' 
import { LoginSchema } from '../../schema/LoginSchema'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors},} = useForm({
        resolver: yupResolver(LoginSchema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <div className='Loginbody'>
            <div className='Loginmain'>
                <h3 className='Loginmainheader'>Expensify</h3>
                <article className='Loginmaincontainer'>
                    <h3 className='Loginmaincontainerh3'>Login</h3>
                    <p className='Loginmaincontainerp2'>Login by  filling your correct infomation</p>
                    <form className='Loginmaincontainer2' onSubmit={handleSubmit(onSubmit)}>
                       <span className='LoginInputWrappper'>
                       <input type='email' placeholder='input your email' className='Loginmaincontainer2input'  {...register("email")} />
                       <p className='LoginInputWrappperError'>{errors?.email?.message}</p>
                       </span>
                        <span className='LoginInputWrappper'>
                            <label className='Loginmaincontainer2p'>Password</label>
                            <input type='password' className='Loginmaincontainer2input' {...register("password")}/>
                            <p className='LoginInputWrappperError'>{errors?.password?.message}</p>
                        </span>
                        <p className='Loginmaincontainer2ptag'>Don’t have an account? <span className='Loginmaincontainer2span' onClick={() => navigate("/signup")}>Sign up</span></p>
                        <main className='Loginmaincontainer2div'>
                            <p className='Loginmaincontainer2divtag' onClick={() => navigate("/")}>Cancel</p>
                            <button className='Loginmaincontainer2divbut' type='submit' >NEXT</button>
                        </main>
                    </form>
                </article>
                <p className='Loginpp'>By signing in in you agree to our  <span className='Loginppcover'>terms</span> and <span className='Loginppcover'>conditions</span></p>
            </div>

        </div>
    )
}

export default Login

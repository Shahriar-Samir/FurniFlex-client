import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginForm = () => {
    const {signIn,googleSignIn} = useContext(AuthContext)

    const [passVisibility,setPassVisibility] = useState(false)

    const submitHandler =async (e)=>{
            e.preventDefault()
            const form = e.target 
            const email = form.email.value
            const password = form.password.value

            try{
                await signIn(email,password)
                return toast.success('Signed In')
            }
            catch(err){
                toast.err('Something went wrong')
            }
    }

    const signInWithGoogle =async ()=>{
        try{
           await googleSignIn()
           return toast.success('SignedIn')
        }
        catch(err){
            toast.err('Something went wrong')
        }
    }

    const updatePassVisibility = ()=>{
        return setPassVisibility(!passVisibility)
    }


    return (
        <section className='w-11/12 mx-auto lg:w-1/2 h-full flex justify-center items-center mb-[100px]'>
         <ToastContainer/>   
        <div className='w-11/12 flex justify-center items-center flex-col max-w-[500px] p-6 bg-[#fafafa]'>

        {/* form titles */}
           <div className='w-full'>
           <h2 className='text-start font-semibold text-3xl text-black'>Welcome Back</h2>
           <h3 className='text-gray-600 font-medium text-start '>Enter your Credentials to access your account</h3>
           </div>
            
        {/* form */}
            <form className="card-body p-0 mt-10 w-full max-w-[500px]" onSubmit={submitHandler}>
            <div className="form-control bg-white px-2 py-2 rounded-lg border-2 ">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">Email address</span>
                    </label>
                    <input type="email" name='email' placeholder="email address" className=" bg-transparent border-none outline-none text-sm font-medium"  />
            </div>
            <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-full relative ">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">Password</span>
                    </label>
                    <input type={passVisibility? 'text' : 'password'} name='password' placeholder="first name" className=" bg-transparent border-none outline-none text-sm font-medium"  />   
                    <div role='button' className='absolute right-5 top-[57%]' onClick={updatePassVisibility}>{passVisibility? <FaRegEyeSlash />: <FaRegEye />}</div> 
            </div>
            <div className='w-full flex justify-end '>
            <label className="label p-0">
                        <Link href="#" className="label-text-alt link link-hover text-titleBlue text-sm font-semibold">Forgot password?</Link>
                    </label>
            </div>
            <div className="form-control ">
            <label className="label cursor-pointer justify-start gap-2 p-0">
                <input type="checkbox" className="checkbox border border-black w-3 h-3 rounded-sm font-medium" />
                <span className="label-text font-semibold text-black">I agree to the Terms & Policy</span>
            </label>
            </div>
            <div className="form-control mt-1">
            <button className="btn bg-black text-white hover:bg-[#636363]">Sign In</button>
            </div>
            </form>
            <div className="divider"><h4 className='text-sm font-semibold mt-3'>or</h4></div>
            
         {/* Social Media Auths*/}
         <div className='flex flex-col lg:flex-row w-full gap-4 '>
            <button className="flex justify-center items-center border-2 gap-3 py-3 px-5 bg-transparent hover:bg-gray-300 text-black font-semibold w-full rounded-md" onClick={signInWithGoogle} ><FcGoogle  className='text-2xl'/> Sign in with Google</button>
            </div>
            
            {/* navigate to login page button */}
            <nav className='flex justify-center font-medium mt-4 text-black'><h1>Have an account? <Link to='/signup' className='text-[#0F3DDE]'>Sign Up</Link></h1></nav>
        </div>
    </section>
    );
};

export default LoginForm;
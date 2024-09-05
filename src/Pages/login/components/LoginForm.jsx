import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <section className='w-11/12 mx-auto lg:w-1/2 h-full flex justify-center items-center mb-[100px]'>
        <div className='w-11/12 flex justify-center items-center flex-col max-w-[500px] p-6 bg-[#fafafa]'>

        {/* form titles */}
           <div className='w-full'>
           <h2 className='text-start font-semibold text-3xl text-black'>Welcome Back</h2>
           <h3 className='text-gray-600 font-medium text-start '>Enter your Credentials to access your account</h3>
           </div>
            
        {/* form */}
            <form className="card-body p-0 mt-10 w-full max-w-[500px]">
            <div className="form-control bg-white px-2 py-2 rounded-lg border-2 ">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">Email address</span>
                    </label>
                    <input type="email" name='email' placeholder="email address" className=" bg-transparent border-none outline-none text-sm font-medium"  />
            </div>
            <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-full">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="first name" className=" bg-transparent border-none outline-none text-sm font-medium"  />    
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
            <button className="flex justify-center items-center border-2 gap-3 py-3 px-5 bg-transparent text-black font-semibold w-full rounded-md"><FcGoogle  className='text-2xl'/> Sign in with Google</button>
            <button className="flex justify-center items-center gap-3 py-3 px-5 border-2 bg-transparent rounded-md text-black font-semibold w-full "><FaApple /> Sign in with Apple</button>
            </div>
            
            {/* navigate to login page button */}
            <nav className='flex justify-center font-medium mt-4 text-black'><h1>Have an account? <Link to='/signup' className='text-[#0F3DDE]'>Sign Up</Link></h1></nav>
        </div>
    </section>
    );
};

export default LoginForm;
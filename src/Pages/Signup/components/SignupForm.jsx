import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignupForm = () => {
    return (
        <section className='h-[150vh] w-1/2 flex justify-center items-center'>
        <div className='py-6 px-4 bg-[#fafafa]'>

            <h2 className='text-center font-semibold text-2xl text-black'>Welcome To</h2>
            <h1 className='text-center font-bold text-[50px] text-black '>Furni<span className='text-titleBlue'>Flex</span></h1>
            <h3 className='text-gray-600 font-medium text-center'>Signup for purchase your desire products</h3>
            
            <form className="card-body p-0 mt-4">
            <div className='w-full flex justify-center items-center gap-3'>
                    <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-1/2">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">First name (optional)</span>
                    </label>
                    <input type="text" name='firstName' placeholder="first name" className=" bg-transparent border-none outline-none text-sm text-black font-medium"  />
                    </div>
                    <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-1/2">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">Last name (optional)</span>
                    </label>
                    <input type="text" name='lastName' placeholder="last name" className=" bg-transparent border-none outline-none text-sm font-medium"  />
                    </div>
            </div>
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
            <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox border border-black w-3 h-3 rounded-sm font-medium" />
                <span className="label-text font-semibold text-black">I agree to the Terms & Policy</span>
            </label>
            </div>
            <div className="form-control mt-1">
            <button className="btn bg-black text-white hover:bg-[#636363]">Signup</button>
            </div>
            </form>
            <div className="divider"><h4 className='text-sm font-semibold mt-3'>or</h4></div>
            {/* Social Media Auths*/}
            <div className='flex w-full gap-4 '>
            <button className="btn border-2 bg-transparent text-black font-semibold "><FcGoogle  className='text-2xl'/> Sign in with Google</button>
            <button className="btn border-2 bg-transparent text-black font-semibold "><FaApple /> Sign in with Apple</button>
            </div>
            <nav className='flex justify-center font-medium mt-4 text-black'><h1>Have an account? <Link to='/signin' className='text-[#0F3DDE]'>Sign In</Link></h1></nav>
        </div>
    </section>
    );
};

export default SignupForm;
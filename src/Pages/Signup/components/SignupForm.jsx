import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const SignupForm = () => {

    const {signUp} = useContext(AuthContext)

    
    // form submit handler 
    const submitHandler = async (e)=>{
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const password = form.password.value

        try{
            const res = await signUp(email,password)
            return toast.success('Account created')
        }
        catch(err){
            if(err.message==='Firebase: Error (auth/email-already-in-use).')
                toast.error('Email is already in use')
            if(err.message==='Firebase: Password should be at least 6 characters (auth/weak-password).')
                toast.error('Password should be at least 6 characters')
        }       
    }

    return (
        <section className='w-11/12 mx-auto lg:w-1/2 h-full flex justify-center items-center mb-[100px]'>
        <div className='w-11/12 flex justify-center items-center flex-col max-w-[500px] p-6 bg-[#fafafa]'>

        {/* form titles */}
            <h2 className='text-center font-semibold text-2xl text-black'>Welcome To</h2>
            <h1 className='text-center font-bold text-[50px] text-black '>Furni<span className='text-titleBlue'>Flex</span></h1>
            <h3 className='text-gray-600 font-medium text-center'>Signup for purchase your desire products</h3>
            
        {/* form */}
            <form className="card-body p-0 mt-4 w-full max-w-[500px]" onSubmit={submitHandler}>
            <div className='w-full flex justify-center items-center flex-col lg:flex-row gap-3'>
                    <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-full">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">First name (optional)</span>
                    </label>
                    <input type="text" name='firstName' placeholder="first name" className=" bg-transparent border-none outline-none text-sm text-black font-medium"  />
                    </div>
                    <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-full">
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
                    <input type="email" name='email' placeholder="email address" className=" bg-transparent border-none outline-none text-sm font-medium" required />
            </div>
            <div className="form-control bg-white px-2 py-2 rounded-lg border-2 w-full">
                    <label className="label px-0 pt-0">
                        <span className="label-text text-xs text-gray-600">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="first name" className=" bg-transparent border-none outline-none text-sm font-medium"  required/>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox border border-black w-3 h-3 rounded-sm font-medium" required/>
                <span className="label-text font-semibold text-black">I agree to the Terms & Policy</span>
            </label>
            </div>
            <div className="form-control mt-1">
            <button className="btn bg-black text-white hover:bg-[#636363]">Signup</button>
            </div>
            </form>
            <div className="divider"><h4 className='text-sm font-semibold mt-3'>or</h4></div>
            
            {/* Social Media Auths*/}
            <div className='flex flex-col lg:flex-row w-full gap-4 '>
            <button className="flex justify-center items-center border-2 gap-3 py-3 px-5 bg-transparent text-black font-semibold w-full rounded-md"><FcGoogle  className='text-2xl'/> Sign in with Google</button>
            <button className="flex justify-center items-center gap-3 py-3 px-5 border-2 bg-transparent rounded-md text-black font-semibold w-full "><FaApple /> Sign in with Apple</button>
            </div>
            
            {/* navigate to login page button */}
            <nav className='flex justify-center font-medium mt-4 text-black'><h1>Have an account? <Link to='/signin' className='text-[#0F3DDE]'>Sign In</Link></h1></nav>
        </div>
    </section>
    );
};

export default SignupForm;
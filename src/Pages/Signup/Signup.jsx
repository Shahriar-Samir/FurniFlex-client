import React from 'react';
import SignupForm from './components/SignupForm';
import Banner from './components/Banner';
import { ToastContainer } from 'react-toastify';

const Signup = () => {
    return (
        <main className='flex flex-col-reverse gap-5 md:gap-0 lg:flex-row w-full lg:h-[150vh]'>
            <ToastContainer/>
            {/* sign up form section*/}
            <SignupForm/>

            {/* banner section */}
            <Banner/>

        </main>
    );
};

export default Signup;
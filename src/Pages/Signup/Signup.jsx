import React from 'react';
import SignupForm from './components/SignupForm';
import Banner from './components/Banner';

const Signup = () => {
    return (
        <main className='flex w-full h-[150vh]'>
            
            {/* sign up form section*/}
            <SignupForm/>

            {/* banner section */}
            <Banner/>

        </main>
    );
};

export default Signup;
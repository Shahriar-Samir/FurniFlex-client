import React from 'react';
import SignupForm from './components/SignupForm';

const Signup = () => {
    return (
        <main className='flex w-full '>
            
            {/* sign up form */}
            <SignupForm/>
            
            {/* title and description */}
            <section className='h-[100vh] w-1/2'>Title</section>

        </main>
    );
};

export default Signup;
import React from 'react';
import LoginForm from './components/LoginForm';
import Banner from './components/Banner';

const Login = () => {
    return (
        <main className='flex flex-col-reverse gap-5 md:gap-0 lg:flex-row w-full lg:h-[150vh]'>
            
            {/* sign up form section*/}
            <LoginForm/>

            {/* banner section */}
            <Banner/>

        </main>
    );
};

export default Login;
import React from 'react';
import LoginForm from './components/LoginForm';
import Banner from './components/Banner';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
        <main className='flex flex-col-reverse gap-5 md:gap-0 lg:flex-row w-full lg:h-[150vh]'>
            <Helmet>
                <title>Login || FurniFlex</title>
            </Helmet>
            {/* sign up form section*/}
            <LoginForm/>

            {/* banner section */}
            <Banner/>

        </main>
    );
};

export default Login;
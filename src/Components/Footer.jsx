import React from 'react';
import { Link } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
       <footer className='flex flex-col justify-center items-center bg-black  mt-20 p-10 gap-7'>
         <section className="footer text-white text bg-black p-0">
  <aside>
  <Link className="text-xl flex items-center justify-center gap-3" to='/'>
    
    {/* logo */}
    <div className='w-12 h-12 bg-titleBlue rounded-full mx-auto flex justify-center items-center'>
            <h1 className='text-black italic font-medium text-3xl'>F</h1>
   </div>
<h1 className='text-center font-bold text-3xl text-white '>Furni<span className='text-titleBlue'>Flex</span></h1></Link>

  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</section>
<section className='flex flex-col w-full items-center text-white gap-2'>
    <div className='flex flex-col gap-10 md:flex-row justify-between items-center w-full'>
        <div className='flex items-center justify-center gap-4'>
        <CiLinkedin />
        <FaFacebook />
        <FaXTwitter />
        <FaInstagram />
        </div>
        <ul className='flex gap-5 items-center justify-center w-full text-sm'>
        <li>March22 Recap</li> 
        <li>Contact</li> 
        <li>General Terms</li> 
        <li>Contact</li> 
        </ul>
        <Link className='underline w-fit text-xs'>United States (English)</Link>
        </div>
        <p className='text-sm text-gray-500'>EEVE © 2024. All rights reserved.</p>
</section>
       </footer>
    );
};

export default Footer;
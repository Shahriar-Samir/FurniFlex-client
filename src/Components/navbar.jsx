import React from 'react';
import { Link } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";

const Navbar = () => {
    return (
       
            <nav className="navbar bg-base-100 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
 <li><Link className='font-medium text-base' to='/'>Home</Link></li>
        <li><Link to='/products' className='font-medium text-base'>Products</Link></li>
        <li><Link to='/categories' className='font-medium text-base'>Categories</Link></li>
        <li><Link to='/custom' className='font-medium text-base'>Custom</Link></li>
      </ul>
    </div>
    <Link className="text-xl flex items-center justify-center gap-2" to='/'>
    
            {/* logo */}
            <div className='w-12 h-12 bg-titleBlue rounded-full mx-auto flex justify-center items-center'>
                    <h1 className='text-black italic font-medium text-3xl'>F</h1>
           </div>
    <h1 className='text-center font-bold text-3xl text-black '>Furni<span className='text-titleBlue'>Flex</span></h1></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link className='font-medium text-base' to='/'>Home</Link></li>
        <li><Link to='/products' className='font-medium text-base'>Products</Link></li>
        <li><Link to='/categories' className='font-medium text-base'>Categories</Link></li>
        <li><Link to='/custom' className='font-medium text-base'>Custom</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
  <button className="flex items-center justify-center relative">
  <TbShoppingBag  className='text-3xl'/>
  <div className="badge bg-black text-white text-[10px] absolute end-[-7px] top-4 p-2">0</div>
</button>
<figure className='w-[45px] h-[45px] rounded-full'>
        <img src='/Icons/user.png' className='w-full h-full'/>
</figure>
  </div>
</nav>

    );
};

export default Navbar;
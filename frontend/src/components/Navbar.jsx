import React, { useState } from 'react'
import kimcoLogo from '../assets/kimco_logo.jpg';
import searchIcon from '../assets/search.png';
import profileIcon from '../assets/profile_icon.png';
import cartIcon from '../assets/shopping-cart.png';
import menuIcon from '../assets/menu.png';
import backIcon from '../assets/left.png';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {

  const [visible,setvisible] = useState(false);
  
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={kimcoLogo} className='w-36' alt="" /></Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>STOCK</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

          </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
          <img src={searchIcon} className='w-5 cursor-pointer' alt="" />

          <div className='group relative'>
            <img className='w-5 cursor-pointer' src={profileIcon} alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>

            </div>
          </div>
          <Link to='/cart' className='relative'>
            <img src={cartIcon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>
          <img onClick={()=>setvisible(true)} src={menuIcon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* sidebar menu for small screene */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setvisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4' src={backIcon} alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/collection'>STOCK</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
          </div>

        </div>
    </div>
  )
}

export default Navbar
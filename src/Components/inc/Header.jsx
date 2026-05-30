import React from 'react'
import logo from '/src/assets/logo.webp'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router';

function Header() {
  return (
    <>

        {/* desktop Header */}

        <div className='max-w-[1024px] mx-auto hidden lg:flex justify-between items-center pt-5 px-5'>
            <img className='w-46 h-10' src={logo} alt="logo" />
            <ul className='flex gap-8'>
                <li><Link className='font-medium hover:text-[#0aa8a7] duration-100' to={'home'}>Home</Link></li>
                <li><Link className='font-medium hover:text-[#0aa8a7] duration-100' to={'/blog'}>Blog</Link></li>
                <li><Link className='font-medium hover:text-[#0aa8a7] duration-100' to={'/pricing'}>Pricing</Link></li>
                <li><Link className='font-medium hover:text-[#0aa8a7] duration-100' to={'/contact'}>Contact</Link></li>
                <li><Link className='font-medium hover:text-[#0aa8a7] duration-100' to={'/faq'}>FAQ</Link></li>
            </ul>
            <div className='flex items-center gap-5'>
                <button className='border-0 text-white bg-[#3bb9b9] w-36 h-12 rounded-3xl hover:scale-110 cursor-pointer duration-300'>Get Demo</button>
            </div>
        </div>

             {/* desktop Header */}

        {/* mobil Header */}

        <div className='lg:hidden flex justify-between items-center py-5 px-5'>
            <img className='w-46 h-10' src={logo} alt="logo" />
            <FaBars className='text-[#777777] text-2xl' />
        </div>

             {/* mobil Header */}

        

    </>
  )
}

export default Header

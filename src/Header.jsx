import React from 'react'
import logo from './assets/logo.webp'
import bannerart from './assets/banner-art.svg'
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <>

        {/* desktop Header */}

        <div className='max-w-[1024px] mx-auto hidden lg:flex justify-between items-center pt-5 px-5'>
            <img className='w-46 h-10' src={logo} alt="logo" />
            <ul className='flex gap-8'>
                <li><a className='text-[#0aa8a7] font-medium' href="">Home</a></li>
                <li><a className='font-medium hover:text-[#0aa8a7] duration-100' href="">Blog</a></li>
                <li><a className='font-medium hover:text-[#0aa8a7] duration-100' href="">Pricing</a></li>
                <li><a className='font-medium hover:text-[#0aa8a7] duration-100' href="">Contact</a></li>
                <li><a className='font-medium hover:text-[#0aa8a7] duration-100' href="">FAQ</a></li>
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

        {/* Let us solve your critical website development challenges */}

        <div className='max-w-[1024px] mx-auto flex flex-col items-center gap-5 text-center py-20 px-5'>
          <h1 className='max-w-[800px] font-semibold lg:text-5xl text-4xl'>Let us solve your critical website development challenges</h1>
          <p className='max-w-[700px] text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
             totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
          <img className='w-[800px]' src={bannerart} alt="banner" />
        </div>

             {/* Let us solve your critical website development challenges */}

    </>
  )
}

export default Header

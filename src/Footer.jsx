import React from 'react'
import logo from './assets/logo.webp'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

function Footer() {
  return (
    <>

    <div className='bg-[#edf6f5]'>
        <div className='max-w-[1024px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 py-20 px-5'>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-2xl'>Company</h3>
                <ul className='flex flex-col gap-1 text-[#777777]'>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Quick Start</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-2xl'>Product</h3>
                <ul className='flex flex-col gap-1 text-[#777777]'>
                    <li><a href="">Features</a></li>
                    <li><a href="">Platform</a></li>
                    <li><a href="">Pricing</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-2xl'>Support</h3>
                <ul className='flex flex-col gap-1 text-[#777777]'>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <img className='w-40' src={logo} alt="logo" />
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</p>
                <div className='flex items-center gap-5'>
                    <span className='border border-[#0aa8a7] hover:bg-[#0aa8a7] text-[15px] text-[#0aa8a7] hover:text-white duration-300 flex justify-center items-center w-8 h-8 rounded-2xl'><FaFacebook /></span>
                    <span className='border border-[#0aa8a7] hover:bg-[#0aa8a7] text-[15px] text-[#0aa8a7] hover:text-white duration-300 flex justify-center items-center w-8 h-8 rounded-2xl'><FaTwitter /></span>
                    <span className='border border-[#0aa8a7] hover:bg-[#0aa8a7] text-[15px] text-[#0aa8a7] hover:text-white duration-300 flex justify-center items-center w-8 h-8 rounded-2xl'><FaLinkedin /></span>
                    <span className='border border-[#0aa8a7] hover:bg-[#0aa8a7] text-[15px] text-[#0aa8a7] hover:text-white duration-300 flex justify-center items-center w-8 h-8 rounded-2xl'><FaSkype /></span>
                </div>
            </div>
        </div>
        <hr className='text-[#e9e9e9]' />
        <div className='px-5'>
            <p className='text-[14px] text-[#777777] text-center py-5'>Designed and Developed By <span className='font-semibold cursor-pointer'>Themefisher •</span> Distributed by <span className='font-semibold cursor-pointer'>ThemeWagon</span></p>
        </div>
    </div>
    
    </>
  )
}

export default Footer

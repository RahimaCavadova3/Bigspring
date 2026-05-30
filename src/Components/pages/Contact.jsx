import React from 'react'
import { GoDotFill } from "react-icons/go";

function Contact() {
  return (
    <>

      <div className="max-w-[1024px] mx-auto py-20 px-5">
        <h1 className='lg:text-5xl text-4xl font-semibold text-center pb-15'>Contact Us</h1>
        <div className='flex lg:flex-row flex-col gap-5 justify-between items-center'>
          <form className="flex flex-col gap-3 lg:w-[50%] w-full">
            <input className='border border-[#e9e9e9] p-1 rounded-[5px]' type="text" placeholder="Name" />
            <input className='border border-[#e9e9e9] p-1 rounded-[5px]' type="email" placeholder="Your email" />
            <input className='border border-[#e9e9e9] p-1 rounded-[5px]' type="text" placeholder="Subject" />
            <textarea className='border border-[#e9e9e9] p-1 h-44 rounded-[5px]' placeholder="Your message"></textarea>
            <button className='border border-[#e9e9e9] bg-[#3bb9b9] text-white hover:scale-110 duration-300 cursor-pointer w-36 h-12 rounded-3xl'>Send Now</button>
          </form>
          <div className='flex flex-col gap-3 lg:w-[50%] w-full'>
            <h3 className='text-3xl font-semibold'>Why you should contact us!</h3>
            <p className='text-[#374151]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              recusandae voluptates doloremque veniam temporibus porro culpa
              ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
            </p>
            <div className="flex items-center gap-2">
              <GoDotFill className='text-[#0aa8a7]' />
              <p>phone: +88 125 256 452</p>
            </div>
            <div className="flex items-center gap-2">
              <GoDotFill className='text-[#0aa8a7]' />
              <p>Mail: info@bigspring.com</p>
            </div>
            <div className="flex items-center gap-2">
              <GoDotFill className='text-[#0aa8a7]' />
              <p>Address: 360 Main rd, Rio, Brazil</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact

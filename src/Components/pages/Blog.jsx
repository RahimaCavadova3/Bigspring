import React from 'react'
import blog4 from '/src/assets/blog-4.jpg'
import blog3 from '/src/assets/blog-3.jpg'
import blog2 from '/src/assets/blog-2.jpg'

function Blog() {
  return (
    <>
      
      <div className='max-w-[1024px] mx-auto py-20 px-5'>
        <h1 className='text-center lg:text-5xl text-4xl font-semibold pb-15'>Latest news</h1>
        <div className='flex lg:flex-row flex-col justify-between items-center gap-5'>
          <div>
            <img className='rounded-xl' src={blog4} alt="blog" />
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-semibold hover:text-[#0aa8a7] cursor-pointer'>Adversus is a web-based dialer and practical CRM solution</h2>
            <p className='text-[#777777]'>##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He</p>
            <button className='border bg-[#0aa8a7] text-white hover:scale-110 duration-300 cursor-pointer w-36 h-12 rounded-3xl'>Read More</button>
          </div>
        </div>
      </div>

      <div className='max-w-[1024px] mx-auto flex lg:flex-row flex-col gap-5 pb-20 px-5'>
        <div className='flex flex-col gap-3'>
          <img className='rounded-[10px]' src={blog4} alt="blog" />
          <h2 className='text-2xl font-semibold'>How to make toys from old Olarpaper</h2>
          <button className='border w-36 h-12 rounded-3xl bg-[#0aa8a7] text-white hover:scale-110 duration-300 cursor-pointer'>Read More</button>
        </div>
        <div className='flex flex-col gap-3'>
          <img className='rounded-[10px]' src={blog3} alt="blog" />
          <h2 className='text-2xl font-semibold'>What you need to know about Photography</h2>
          <button className='border w-36 h-12 rounded-3xl bg-[#0aa8a7] text-white hover:scale-110 duration-300 cursor-pointer'>Read More</button>
        </div>
        <div className='flex flex-col gap-3'>
          <img className='rounded-[10px]' src={blog2} alt="blog" />
          <h2 className='text-2xl font-semibold'>How to make toys from old Olarpaper</h2>
          <button className='border w-36 h-12 rounded-3xl bg-[#0aa8a7] text-white hover:scale-110 duration-300 cursor-pointer'>Read More</button>
        </div>
      </div>

    </>
  )
}

export default Blog

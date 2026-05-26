import React from 'react'
import code from './assets/code.svg'
import oop from './assets/oop.svg'
import user from './assets/user-clock.svg'
import love from './assets/love.svg'
import speedometer from './assets/speedometer.svg'
import cloud from './assets/cloud.svg'
import serviceslide1 from './assets/service-slide-1.png'
import serviceslide2 from './assets/service-slide-2.png'
import serviceslide3 from './assets/service-slide-3.png'
import banner from './assets/banner.svg'
import cta from './assets/cta.svg'

function Content() {
  return (
    <>

      {/* Something You Need To Know */}

      <div className='bg-[#edf6f5]'>
        <div className='max-w-[1024px] mx-auto py-20 px-5'>
            <h2 className='font-semibold lg:text-4xl text-3xl text-center pb-10'>Something You Need To Know</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-8'>
                <div className='border-0 bg-white rounded-xl hover:shadow-xl duration-300 p-5 flex flex-col items-center text-center gap-3'>
                  <img className='w-8' src={code} alt="code" />
                  <h5 className='text-xl font-medium'>Clean Code</h5>
                  <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='border-0 bg-white rounded-xl hover:shadow-xl duration-300 p-5 flex flex-col items-center text-center gap-3'>
                  <img className='w-8' src={oop} alt="oop" />
                  <h5 className='text-xl font-medium'>Object Oriented</h5>
                  <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='border-0 bg-white rounded-xl hover:shadow-xl duration-300 p-5 flex flex-col items-center text-center gap-3'>
                  <img className='w-8' src={user} alt="user" />
                  <h5 className='text-xl font-medium'>24h Service</h5>
                  <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='border-0 bg-white rounded-xl hover:shadow-xl duration-300 p-5 flex flex-col items-center text-center gap-3'>
                  <img className='w-8' src={love} alt="love" />
                  <h5 className='text-xl font-medium'>Value for Money</h5>
                  <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='border-0 bg-white rounded-xl hover:shadow-xl duration-300 p-5 flex flex-col items-center text-center gap-3'>
                  <img className='w-8' src={speedometer} alt="speedometer" />
                  <h5 className='text-xl font-medium'>Faster Response</h5>
                  <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
                <div className='border-0 bg-white rounded-xl hover:shadow-xl duration-300 p-5 flex flex-col items-center text-center gap-3'>
                  <img className='w-8' src={cloud} alt="cloud" />
                  <h5 className='text-xl font-medium'>Cloud Support</h5>
                  <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                </div>
            </div>
        </div>
      </div>
           {/* Something You Need To Know */}

      {/* It is the most advanced digital marketing and it company. */}

      <div className='max-w-[1024px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 py-20 px-5'>
        <div className='lg:w-[50%] flex flex-col gap-3'>
          <h2 className='font-semibold lg:text-4xl text-3xl'>It is the most advanced digital marketing and it company.</h2>
          <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
          <a className='text-[#0aa8a7]' href="">Check it out <span>→</span></a>
        </div>
        <div className='lg:w-[50%] lg:order-1 -order-1'><img src={serviceslide1} alt="serviceslide" /></div>
      </div>

      {/* It is the most advanced digital marketing and it company. */}

      {/* It is a privately owned Information and cyber security company */}

      <div className='bg-[#edf6f5]'>
        <div className='max-w-[1024px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 py-20 px-5'>
          <div className='lg:w-[50%]'><img src={serviceslide1} alt="serviceslide" /></div>
          <div className='lg:w-[50%] flex flex-col gap-3'>
            <h2 className='font-semibold lg:text-4xl text-3xl'>It is a privately owned Information and cyber security company</h2>
            <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <a className='text-[#0aa8a7]' href="">Check it out <span>→</span></a>
          </div>
        </div>
      </div>

           {/* It is a privately owned Information and cyber security company */}

      {/* It’s a team of experienced and skilled people with distributions */}

      <div className='max-w-[1024px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 py-20 px-5'>
        <div className='lg:w-[50%] flex flex-col gap-3'>
          <h2 className='font-semibold lg:text-4xl text-3xl'>It’s a team of experienced and skilled people with distributions</h2>
          <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
          <a className='text-[#0aa8a7]' href="">Check it out <span>→</span></a>
        </div>
        <div className='lg:w-[50%] lg:order-1 -order-1'><img src={serviceslide2} alt="serviceslide" /></div>
      </div>

           {/* It’s a team of experienced and skilled people with distributions */}

      {/* A company standing different from others */}

      <div className='bg-[#edf6f5]'>
        <div className='max-w-[1024px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 py-20 px-5'>
          <div className='lg:w-[50%]'><img src={serviceslide3} alt="serviceslide" /></div>
          <div className='lg:w-[50%] flex flex-col gap-3'>
            <h2 className='font-semibold lg:text-4xl text-3xl'>A company standing different from others</h2>
            <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <a className='text-[#0aa8a7]' href="">Check it out <span>→</span></a>
          </div>
        </div>
      </div>

           {/* A company standing different from others */}

      {/* Experience the best workflow with us */}

      <h2 className='max-w-[1024px] lg:w-96 mx-auto font-semibold lg:text-4xl text-3xl text-center pt-20 pb-10 px-5'>Experience the best workflow with us</h2>
      <div className="bg-[url('./assets/banner.svg')] bg-cover bg-center h-80"></div>

           {/* Experience the best workflow with us */}

      {/* Ready to get started? */}

      <div className='max-w-[1024px] mx-auto py-20 px-5'>
        <div className='border-0 rounded-xl shadow-xl flex lg:flex-row flex-col items-center gap-5 py-10 lg:px-20 px-3'>
          <div className='lg:w-[50%]'><img src={cta} alt="cta" /></div>
          <div className='lg:w-[50%] flex flex-col gap-5 lg:text-left lg:items-start items-center text-center'>
            <h2 className='font-semibold lg:text-4xl text-3xl'>Ready to get started?</h2>
            <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</p>
            <button className='border-0 bg-[#0aa8a7] text-white hover:scale-110 duration-300 rounded-3xl w-32 h-12'>Contact Us</button>
          </div>
        </div>
      </div>

           {/* Ready to get started? */}
           
    </>
  )
}

export default Content

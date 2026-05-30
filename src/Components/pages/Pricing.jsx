import React from 'react'

function Pricing() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto py-20 px-5">
        <h1 className="lg:text-5xl text-4xl font-semibold text-center pb-15">Pricing</h1>
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center'>
          <div className="border border-[#dfdfdf] flex flex-col items-center gap-3 py-10 w-full rounded-[5px]">
            <h4 className="text-2xl text-[#222222] font-semibold">
              Basic Plan
            </h4>
            <h1 className="text-5xl text-[#222222]">
              $49<span className="text-[15px] text-[#777777]">/ month</span>
            </h1>
            <h4 className="text-2xl text-[#777777]">
              Best For Small Individuals
            </h4>
            <p className="text-[#777777]">Express Service</p>
            <p className="text-[#777777]">Customs Clearance</p>
            <p className="text-[#777777]">Time-Critical Services</p>
            <button className="border border-[#0aa8a7] hover:text-[#0aa8a7] hover:scale-110 duration-300 w-44 h-12 rounded-3xl text-[#777777] font-semibold">
              Get started for free
            </button>
          </div>
          <div className="border-0 border-[#dfdfdf] shadow-2xl flex flex-col items-center gap-3 py-10 w-full rounded-[5px]">
            <h4 className="text-2xl text-[#222222] font-semibold">
              Professional Plan
            </h4>
            <h1 className="text-5xl text-[#222222]">
              $69<span className="text-[15px] text-[#777777]">/ month</span>
            </h1>
            <h4 className="text-2xl text-[#777777]">
              Best For Professionals
            </h4>
            <p className="text-[#777777]">Express Service</p>
            <p className="text-[#777777]">Customs Clearance</p>
            <p className="text-[#777777]">Time-Critical Services</p>
            <p className="text-[#777777]">Cloud Service</p>
            <p className="text-[#777777]">Best Dashboard</p>
            <button className="border bg-[#0aa8a7] text-white hover:scale-110 duration-300 cursor-pointer w-36 h-12 rounded-3xl text-[#777777] font-semibold">
              Get started
            </button>
          </div>
          <div className="border border-[#dfdfdf] flex flex-col items-center gap-3 py-10 w-full rounded-[5px]">
            <h4 className="text-2xl text-[#222222] font-semibold">
              Business Plan
            </h4>
            <h1 className="text-5xl text-[#222222]">
              $99<span className="text-[15px] text-[#777777]">/ month</span>
            </h1>
            <h4 className="text-2xl text-[#777777]">
              Best For Large Individuals
            </h4>
            <p className="text-[#777777]">Express Service</p>
            <p className="text-[#777777]">Customs Clearance</p>
            <p className="text-[#777777]">Time-Critical Services</p>
            <button className="border border-[#0aa8a7] hover:text-[#0aa8a7] hover:scale-110 duration-300 w-36 h-12 rounded-3xl text-[#777777] font-semibold">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing

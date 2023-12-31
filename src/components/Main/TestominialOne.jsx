import React from 'react';

export default function TestominialOne() {
  return (
    <section className='testimonialOne'>
      <div className='relative  Testimonial max-w-[1176px] mx-auto '>
        <div
          className='absolute inset-0 bg-center bg-no-repeat rounded-[10px]'
          style={{ backgroundImage: "url('../images/Test1.png')" }}
        ></div>
        <div className='relative z-10 h-full flex  items-center '>
          <div className='bg-white px-2 rounded-[12px] py-4 my-[50px] h-[226px] min-w[310px] w-[461px] mx-8 md:p-7'>
            <h1 className='font-bold px-5 text-[18px] md:text-xl'>
              Get your content needs catered and
              <span className='text-[#55BDB3]'> boost your business</span> with
              this amazing discount of 20%.
            </h1>
            <div className='gap-3 flex p-6'>
              <button className='bg-[#0F2435] border-2 border-[#0F2435] color text-white py-2 px-6 rounded-md'>
                Free Proposal
              </button>
              <button className='border-2 border-[#0F2435]  py-2 px-6 rounded-md'>
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

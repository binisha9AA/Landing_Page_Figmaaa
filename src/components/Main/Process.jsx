import React from 'react';

export default function Process() {
  return (
    <section className='process my-[130px] mx-auto max-w-[1085px] '>
      <div className='process-wrapper px-5 flex relative md:px-0'>
        <section className='process_text w-[100%] md:w-[379px] '>
          <h2 className='font-bold text-[18px] mb-[14px]'>
            Our Simple Process to Order
          </h2>
          <p className='mb-[13px] text-lg'>
            Customer satisfaction is our priority, and we ensure to deliver what
            we promise. Let us align ourinnovative ideas and strategies to your
            needs to generate unique and powerful results.
          </p>
          <p className='mb-[13px] text-lg'>
            We meet challenging content requirements of your business, whether
            you are a startup or an enterprise. If you are looking to make a
            mark on the web through innovative marketing content, we can serve
            it best.
          </p>

          <p className='mb-[13px] text-lg'>
            But who has time to run their business and pound away at the
            keyboard to get content on schedule and on target?
          </p>
          <div className='gap-3 flex pt-[42px]'>
            <button className='bg-[#0F2435] border-2 border-[#0F2435] color text-white py-2 px-6 rounded-md'>
              Free Proposal
            </button>
            <button className='border-2 border-[#0F2435]  py-2 px-6 rounded-md'>
              Chat Now
            </button>
          </div>
        </section>
        <section className='process_image  static left-[20%] hidden md:flex'>
          <img src='../images/Process.png' />
        </section>
      </div>
    </section>
  );
}

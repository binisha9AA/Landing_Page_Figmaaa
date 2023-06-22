import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';

export default function Packages() {
  const packages = [
    {
      id: 0,
      list: '1 On-Page SEO Analysis',
    },
    {
      id: 2,
      list: '100 Articles: 500 Words',
    },
    {
      id: 3,
      list: '100 Blog Posts: 500 Words',
    },
    {
      id: 4,
      list: '10 Press Release: 600 Words',
    },
    {
      id: 5,
      list: '10 Designed Info Graphics: 150 words',
    },
    {
      id: 6,
      list: '30 Business Profiles Submissions',
    },
    {
      id: 7,
      list: '2 Months Project',
    },
    {
      id: 8,
      list: 'Free Unlimited Revision',
    },
    {
      id: 9,
      list: 'Plagiarism Free Content',
    },
  ];
  const bundle = [
    {
      id: 0,
      list: 'Empower your online presence',
    },
    {
      id: 1,
      list: 'Empower your online presence',
    },
    {
      id: 2,
      list: 'Empower your online presence',
    },
    {
      id: 3,
      list: 'Empower your online presence',
    },
    {
      id: 4,
      list: 'Empower your online presence',
    },
  ];
  return (
    <>
      <div className='package_container bg-[#F0F8F8] my-20'>
        <section className='package_content p-10 text-center'>
          <h2 className='Package_title mb-5 font-semibold text-[28px]'>
            SEO Content Bundle Packages
          </h2>
          <p className='text-center mx-auto w-[60%] max-w-[617.86px] text-[14px] font-normal'>
            Be the echo in the digital world! Boost your brand awareness,
            increase your sales and let your brand be recognized with our new
            SEO content bundle package.!
          </p>
        </section>
        <section className='mt-[74px] flex flex-col justify-center md:items-start lg:flex-row items-center '>
          <div className='bg-white w-[40%] min-w-[320px] max-w-[557px] rounded-2xl px-[24px] py-7 gap-4 flex flex-col md:width[557px]'>
            <h2 className='font-bold text-[24px] mb-[27px]'>Master Package</h2>
            <div className='bg-[#F0F8F8] rounded-xl p-5'>
              <div>
                {packages.map((item) => {
                  {
                    return (
                      <div
                        key={item.id}
                        className='flex gap-2 items-center mb-4'
                      >
                        <div className='w-[15px] h-[15px] rounded-full flex justify-center items-center bg-[#55BDB3]'>
                          <FiCheck className='text-white text-[12px] w-[20px] h-[20px]' />
                        </div>
                        <p className='font-semibold text-[16px]'>{item.list}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className='bg-[#F0F8F8] px-5 py-7 flex flex-col justify-between md:flex-row '>
              <div className='flex gap-4'>
                <div className=''>
                  <h2 className='text-xs'>Total Price</h2>
                  <p className='font-bold text-xl'>$14778</p>
                </div>
                <div className='w-[2px] h-[100%] border-[1px] border-dashed border-black' />
                <div className='flex flex-col'>
                  <h2 className='text-xs'>After Discount</h2>
                  <p className='font-bold text-xl'>$8865</p>
                </div>
              </div>
              <div>
                <button className='bg-[#130F26] py-2 px-4 text-white rounded-md text-sm'>
                  Get Packages
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex flex-col w-[40%] min-w-[320px] p-7 '>
            <h2 className='font-bold text-[24px]'>
              Boost Your Website's Rankings
            </h2>
            <p className='mt-2 mb-4 font-normal text-[20px]'>
              Outperform your competitors & govern your niche.
            </p>

            <div>
              {bundle.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='flex gap-[35px] items-center mb-3'
                  >
                    <div>
                      <BsCheckAll className='text-[#55BDB3] w-[20px] h-[20px]' />
                    </div>
                    <div className='font-normal text-[16px]'>{item.list}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

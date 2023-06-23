import React from 'react';

export default function Sponsors() {
  return (
    <>
      <figure className="sponsors hidden md:flex items-center justify-between gap-4 flex-wrap px-12 h-[50px] bg-white rounded-xl absolute bottom-[45px] mx-auto left-[50%] translate-x-[-50%] shadow-md min-w-[769px] xl:top-[100%]">
        <h2 className="font-medium text-[#C4C4C4]">Powered By</h2>

        <img src="../images/LinkedIn.png" className="h-[20px]" />
        <img src="../images/facebook.png" className="h-[20px]" />
        <img src="../images/google.png" className="h-[20px]" />
        <img src="../images/nike.png" className="h-[45px] w-[45px]" />
      </figure>
    </>
  );
}

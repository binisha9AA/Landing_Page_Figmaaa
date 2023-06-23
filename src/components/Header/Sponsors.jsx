import React from 'react';

export default function Sponsors() {
  return (
    <>
      <section className="sponsors  bg-black flex px-8 gap-4 items-center rounded-xl shadow-md justify-between absolute bottom-[45px] mx-auto left-[50%] translate-x-[-50%]">
        <h2 className="font-medium text-[#C4C4C4]">Powered By</h2>
        <figure className=" flex gap-9 items-center">
          <img src="../images/LinkedIn.png" className="h-[20px]" />
          <img src="../images/facebook.png" className="h-[20px]" />
          <img src="../images/google.png" className="h-[20px]" />
          <img src="../images/nike.png" className="h-[45px] w-[45px]" />
        </figure>
      </section>
    </>
  );
}

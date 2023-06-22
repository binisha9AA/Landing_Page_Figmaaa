import React from 'react';
import Button from '../Button/Button';

function Title() {
  return (
    <section className='slogan'>
      <div className='flex flex-col justify-between w-full  mx-auto  md:flex-row mt-[120px]'>
        <section>
          <div className='leading-[50px] font-bold text-[40px]'>
            <h1 className='text-[#55BDB3] uppercase'>we provide</h1>
            <h1 className='text-[#0F2435]  font-bold '>ACTION-PROVOKING</h1>
          </div>
          <h2 className='text-[28px] font-normal  leading-[35.28px] uppercase  mb-[23px]'>
            to help you grow gradually
          </h2>
          <p className=' max-w-[446px]  mb-[85px] text-[14px] font-normal'>
            Lörem ipsum onas. Ivera. Prende exoment: gigad för tralig
            nehahusade. Parasocial platinade och tyvaling, suskade, gäv. Beseng
            kopimism inte teröktig.
          </p>
          <div className='pb-0 md:pb-[137px]'>
            <Button />
          </div>
        </section>
        <section>
          <img src='../images/header Image.png' alt='' />
        </section>
      </div>
    </section>
  );
}

export default Title;

import React from 'react';
import Navigation from './Navigation';
import Sponsors from './Sponsors';
import Title from './Title';

export default function Header() {
  return (
    <>
      <header className=" site_header bg-[#F0F8F8] md:m-0 h-max pt-7  px-20 ">
        <div className="container max-w-[1170px] flex justify-center md:shadow-md">
          <div className="h-group flex bg-white max-w-[1170px] md: w-[1170px] h-[65px]">
            <nav className="main-navigation w-full">
              <Navigation />
            </nav>
          </div>
        </div>
        <Title />
        <Sponsors />
      </header>
    </>
  );
}

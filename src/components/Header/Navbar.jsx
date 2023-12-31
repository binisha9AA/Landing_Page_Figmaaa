import React from 'react';
import HeaderAcceso from './HeaderAcceso';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

function menuHandler(e) {
  let list = document.querySelector('ul');
  if (e.name === 'menu') {
    e.name = 'close';
    list.classList.add('top-[88px]');
    list.classList.add('opacity-100');
  } else {
    e.name = 'menu';
    list.classList.remove('top-[88px]');
    list.classList.remove('opacity-100');
  }
  //   console.log('hello workd');
}

export default function Navabar() {
  return (
    <nav className="p-5 bg-slate-600 shadow-md md:flex item-center justify-between">
      <div className="flex justify-between items-center">
        <span className="uppercase text-xl">logo</span>

        <span className="text-3xl cursor-pointer  mx-2 md:hidden block">
          <AiOutlineMenu className="menu" onClick={menuHandler} />
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-[#55BDB3] duration-500">
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-[#55BDB3] duration-500">
            Our Services
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-[#55BDB3] duration-500">
            Our Process
          </a>
        </li>
        <li>
          <a href="#" className="text-xl hover:text-[#55BDB3] duration-500">
            Why Choose Us
          </a>
        </li>
        <HeaderAcceso />
      </ul>
    </nav>
  );
}

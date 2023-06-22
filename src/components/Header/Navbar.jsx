import React from 'react';

const menuData = [
  {
    id: 0,
    label: 'Home',
    link: '/',
  },
  {
    id: 1,
    label: 'Our Service',
    link: '/',
  },
  {
    id: 2,
    label: 'Our Process',
    link: '/',
  },
  {
    id: 3,
    label: 'Why Contact Us',
    link: '/',
  },
];

function Navbar() {
  return (
    <nav className=' navbar flex flex-row items-center justify-between flex-wrap px-12 py-2 bg-white rounded-xl'>
      <a href='./' className='font-semibold text-lg'>
        Logo
      </a>
      <ul className='flex gap-6 justify-between'>
        {menuData.map((item) => (
          <li
            key={item.id}
            className='flex items-center text-sm font-semibold hover:text-[#55BDB3]'
          >
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

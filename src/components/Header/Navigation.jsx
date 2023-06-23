import React from 'react';
import '../Styles/styles.css';
import HeaderAcceso from './HeaderAcceso';

function toggleHamburger() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('nav-links-visible');
}
export default function Navigation() {
  return (
    <>
      <div className="nav rounded-[16px]">
        <div className="nav-header">
          <div className="nav-title hidden h-full md:flex">
            <a href="" className="pl-[20px] flex items-center h-full">
              {' '}
              logo
            </a>
          </div>
        </div>
        <div className="nav-btn" onClick={toggleHamburger}>
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <a href="#" target="_blank" className="active">
            Home
          </a>
          <a href="#" target="_blank">
            Our services
          </a>
          <a href="#" target="_blank">
            Our processes
          </a>
          <a href="#" target="_blank">
            why chose us
          </a>
          <HeaderAcceso />
        </div>
      </div>
    </>
  );
}

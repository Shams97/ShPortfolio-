import React from 'react';
import {Link } from "react-router-dom";

export default function Nav() {
    return (
      <div>
        <nav className="lg:py-16 py-0 fixed hidden lg:flex flex-col lg:items-start z-10">
          <Link className="link-custom" to="/">
            HOME
          </Link>
          <Link className="link-custom" to="/about">
            ABOUT
          </Link>
          <Link className="link-custom" to="/contact">
            CONTACT ME
          </Link>
          <Link className="link-custom" to={{pathname:"https://medium.com/@shamsnaji4"}}  target="_blank">
            ARTICLES
          </Link>
        </nav>
  
  
      <div  className="py-3 lg:hidden block bg-primary"> 
          <ul className="flex justify-around lg:hidden">
          <Link className="text-white px-1 hover:bg-white hover:text-red-300 hover:px-10 ease-out duration-300  text-sm" to="/">
            HOME
          </Link>
          <Link className="text-white px-1 hover:bg-white hover:text-red-300 hover:px-10 ease-out duration-300  text-sm" to="/about">
            ABOUT
          </Link>
          <Link className="text-white px-1 hover:bg-white hover:text-red-300 hover:px-10 ease-out duration-300  text-sm" to="/contact">
            CONTACT ME
          </Link>
          <Link className="text-white px-1 hover:bg-white hover:text-red-300 hover:px-10 ease-out duration-300  text-sm" to={{pathname:"https://medium.com/@shamsnaji4"}}  target="_blank">
            ARTICLES
          </Link>
          </ul>
        </div>
      </div>
    );
  };
  
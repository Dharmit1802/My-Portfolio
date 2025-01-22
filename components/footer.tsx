import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaMobile, FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <section className='bg-gray-900 px-24 py-7 flex gap-y-3 flex-col w-[100vw] text-white items-center justify-center dark:shadow-2xl dark:shadow-gray-500'>
      <div className='flex flex-col md:flex-row gap-y-4 items-center md:gap-x-[100px] gap-x-[50px]'>
        <div className='flex flex-col items-center md:justify-between text-md gap-3'>
          <div className='flex gap-1 items-center'>
            <BsTelephone className='text-[1.3rem] mr-2'/><span> +91-8320305253</span>
          </div>
          <div className='flex gap-1 items-center'>
            <HiOutlineMail className='text-[1.3rem] mr-2'/><span> dharmit1802@gmail.com</span>
          </div>
        </div>
        <div className='hidden md:block w-1 h-8 bg-gray-300'></div>
        <div className='flex gap-x-3 text-black text-md'>
            <a className="text-[1.5rem] bg-white aspect-square flex items-center justify-center rounded-full text-gray-700 outline-none p-4 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer scale-100" href="https://www.linkedin.com/in/dharmit-dungarani-79b929222/" target="_blank">
              <BsLinkedin/>
            </a>
            <a className="text-[1.5rem] bg-white aspect-square flex items-center justify-center rounded-full text-gray-700 outline-none p-4 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer scale-100" href="https://github.com/Dharmit1802" target="_blank">
              <FaGithubSquare/>
            </a>
            <a className="text-[1.5rem] p-4 bg-white aspect-square flex items-center justify-center rounded-full text-gray-700 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer scale-100" href="https://www.instagram.com/dharmit_dungarani_49/" target="_blank">
              <FaInstagram/>
            </a>
            <a className="text-[1.5rem] p-4 bg-white aspect-square flex items-center justify-center rounded-full text-gray-700 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer scale-100" href="https://twitter.com/DharmitDungrani" target="_blank">
              <FaTwitter/>
            </a>
        </div>
      </div>  
      <p className='mt-6 border-b-2 text-center border-gray-400 opacity-75'>Copyright © 2024 Dharmit Personal Profile</p>
    </section>
  )
}

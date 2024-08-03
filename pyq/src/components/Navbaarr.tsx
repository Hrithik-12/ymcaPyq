'use client'
import React from 'react'
import { Button,Navbar } from "flowbite-react";
import Link from 'next/link';
import Image from 'next/image';

function Navbarrr() {
  return (
   
      // <div className='w-[60%] mx-auto p-3 h-[3rem]  inset-x-0 mt-5     rounded-full bg-[#151515] text-white '>
      //   <div className='w-[80%] flex justify-between items-center mx-auto text-md font-semibold  flex-wrap   '>
      //   <div>
      //     <Link href={'/'} className='hover:underline' >Home</Link>
      //   </div>
      //   <div>
      //   <Link href={'/upload'} className='hover:underline'>Upload</Link>


      //   </div>
      //   <div>
      //     <Link href={'/contactus'} className='hover:underline'>Contact Us</Link>
      //   </div>
      //   </div>

     
      // </div>
    <div className='w-full px-3 py-2   '>
        <Navbar fluid rounded  className='w-[70%] mx-auto border-[0.1rem] rounded-full shadow-md bg-[#FCF8F3]  ' >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
      <div className='flex gap-2 '>
      <Image src={'https://t3.ftcdn.net/jpg/04/92/96/18/360_F_492961866_MIqCTiGZD0ZzjXTAfYCEJdGaeCYAZSAT.jpg'} height={60} width={60} alt='logo' className='rounded-full bg-[#FCF8F3]  ' />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white  ">Exam Vault</span>
      </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link as={'div'} active ><Link href={'/'}  >Home</Link></Navbar.Link>
        <Navbar.Link as={'div'} ><Link href={'/upload'}>Upload</Link></Navbar.Link>
        <Navbar.Link as={'div'} ><Link href={'/contact'} >Contact</Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
       

  )
}

export default Navbarrr



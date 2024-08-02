import React from 'react'
import { Button,Navbar } from "flowbite-react";
import Link from 'next/link';

function Navbarrr() {
  return (
   
      <div className='w-[60%] mx-auto p-3 h-[3rem]  inset-x-0 mt-5     rounded-full bg-[#151515] text-white '>
        <div className='w-[80%] flex justify-between items-center mx-auto text-md font-semibold  flex-wrap   '>
        <div>
          <Link href={'/'} className='hover:underline' >Home</Link>
        </div>
        <div>
        <Link href={'/upload'} className='hover:underline'>Upload</Link>


        </div>
        <div>
          <Link href={'/contactus'} className='hover:underline'>Contact Us</Link>
        </div>
        </div>

     
      </div>
       

  )
}

export default Navbarrr



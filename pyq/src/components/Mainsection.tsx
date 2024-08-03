import { Button } from 'flowbite-react'
import React from 'react'
import Link from 'next/link'

function Mainsection() {
  return (
    // <div className='h-auto bg-[#FCF8F3] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-5 md:py-0  '>
    //   <div className='w-[90%] p-2'>
    //     <h1 className='text-4xl text-center font-serif  md:text-7xl md:mt-0   '>Exam Vault</h1>
    //     <p className='mt-4 font-semibold text-[#006769]  md:text-lg w-full mx-auto '>Welcome to ExamVault, your go-to resource for accessing university past exam papers. Our intuitive Next.js app is designed to help students easily find and review previous exam questions, empowering you to study smarter and achieve better results. With a comprehensive archive at your fingertips, ExamVault ensures you are always prepared for what ahead. Unlock your potential and start exploring today!</p>
    //   </div>
    //   <Link href={'/letmein'} className='mt-5 w-[10rem] '>
    //   <Button className='w-full' gradientDuoTone="purpleToBlue" outline  >Let Me In</Button>
    //   </Link>
    // </div>
    <div className='h-auto bg-[#FCF8F3] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-5 md:py-0'>
      <div className='w-[90%] p-2'>
        <h1 className='text-2xl text-center font-serif md:text-7xl md:mt-0 uppercase '>
          Exam Vault
        </h1>
        <p className='mt-4  text-[#006769] md:text-lg w-full mx-auto text-center text-sm font-serif '>
          Welcome to ExamVault, your go-to resource for accessing university past exam papers. Our intuitive Next.js app is designed to help students easily find and review previous exam questions, empowering you to study smarter and achieve better results. With a comprehensive archive at your fingertips, ExamVault ensures you are always prepared for what ahead. Unlock your potential and start exploring today!
        </p>
      </div>
      <Link href='/letmein' className='mt-5 w-[10rem]'>
        <Button className='w-full' gradientDuoTone='purpleToBlue' outline>
          Let Me In
        </Button>
      </Link>
    </div>
  )
}

export default Mainsection
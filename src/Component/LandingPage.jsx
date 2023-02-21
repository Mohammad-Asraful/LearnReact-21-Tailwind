// For practice Tailwind CSS

import React from 'react'
import logo from '../Image/logo.png'

const LandingPage = () => {
   return (
      <>
         <header className='landingPage h-screen py-4 px-7'>
            <div className='text-white flex justify-between'>
               {/* logo */}
               <div className='flex items-center justify-center gap-1'>
                  <img className='w-6 h-6' src={logo} alt="" />
                  <h1>Hoo<span className='text-cyan-400'>Bank</span></h1>
               </div>

               {/* menu */}
               <ul className='flex gap-5 items-center'>
                  <li>
                     <a href="www.instagram.com" rel='noreferrer'>Home</a>
                  </li>
                  <li>
                     <a href="www.instagram.com" rel='noreferrer'>Features</a>
                  </li>
                  <li>
                     <a href="www.instagram.com" rel='noreferrer'>Product</a>
                  </li>
                  <li>
                     <a href="www.instagram.com" rel='noreferrer'>Clients</a>
                  </li>
               </ul>
            </div>


            <div className="hero mt-32">

               <div className='w-fit bg-gray-800 px-1 rounded'>
                  <p className='text-white'>🎁 <span className='font-bold'>20% </span>Discount For <span className='font-bold'>1 Month </span>Account</p>
               </div>

               <div className='flex w-[510px]'>
                  <h1 className='capitalize text-white text-5xl w-[415px] leading-[1.2] font-bold'>The next <span className='text-[#B9F3F4]'>generation</span> payment method.</h1>

                  <div className='text-[#89F3F4] w-[100px] h-[100px] border border-[#89F3F4] rounded-full grid items-center p-6'>Get ↗ Started</div>
               </div>



               <small className='block text-white w-[320px] mt-5'>Our team of experts uses a methodolgy to identify the credit cards most likely to fit your needs. We examine annual percentage rotes, annual fees.</small>
            </div>


         </header>

      </>
   )
}

export default LandingPage
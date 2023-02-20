import React from 'react'

const HeaderAndHero = () => {
   return (

      <>

         {/* main div start */}
         <div className='
      main-hero-div
      px-5
      h-[90vh]
      bg-[url("./Image/image.jpg")] 
      bg-no-repeat 
      bg-cover 
      bg-center'
         >

            {/* header start */}
            <div className='flex text-white pt-3 justify-between items-center'>
               <div>
                  <h1 className='uppercase pl-2 text-orange-600 font-extrabold'>Startup</h1>
               </div>

               <ul className='flex items-center gap-1 uppercase'>

                  <li>
                     <a className='bg-slate-500 py-1 px-3 rounded-lg hover:bg-emerald-200 hover:text-gray-900 transition' href="www.facebook.com" target='_blank' rel='noreferrer'>Home</a>
                  </li>
                  <li>
                     <a className='bg-slate-500 py-1 px-3 rounded-lg hover:bg-emerald-200 hover:text-gray-900 ' href="www.facebook.com" target='_blank' rel='noreferrer'>About</a>
                  </li>
                  <li>
                     <a className='bg-slate-500 py-1 px-3 rounded-lg hover:bg-emerald-200 hover:text-gray-900 ' href="www.facebook.com" target='_blank' rel='noreferrer'>Pricing</a>
                  </li>
                  <li>
                     <a className='bg-slate-500 py-1 px-3 rounded-lg hover:bg-emerald-200 hover:text-gray-900 ' href="www.facebook.com" target='_blank' rel='noreferrer'>Support</a>
                  </li>
                  <li>
                     <a className='bg-slate-500 py-1 px-3 rounded-lg hover:bg-emerald-200 hover:text-gray-900 ' href="www.facebook.com" target='_blank' rel='noreferrer'>Pages</a>
                  </li>

               </ul>

               <div className='flex items-center justify-center'>
                  <button className='bg-blue-600 px-2 py-1 rounded'>Sign in</button>
                  <button className='from-purple-800 px-3 rounded'>Sign Up</button>
               </div>
            </div>
            {/* header end */}

            {/* hero section start */}
            <div className='text-center mx-auto my-16 text-white pt-16'>
               <h1 className='text-4xl font-bold'>Startup Focused</h1>
               <h1 className='text-4xl font-bold mt-3'>Talwind CSS Template</h1>
               <p className='w-96 mx-auto mt-4 text-sm'>A complete tailwind CSS Web Template Crafted for - Startup, SaaS, Business, Softwere and Agencies, Comes with high-quality design and everything you need!</p>

               <div className='flex gap-1 justify-center mt-5'>
                  <button className='bg-blue-600 p-2 rounded-lg hover:bg-slate-700' >Get Started</button>
                  <button className='bg-gray-500 p-2 rounded-lg hover:bg-slate-700'>Learn More</button>
               </div>
            </div>
            {/* hero section end */}

         </div>
         {/* main div end */}

      </>

   )
}

export default HeaderAndHero
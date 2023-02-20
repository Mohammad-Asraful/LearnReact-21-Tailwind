import React from 'react'

const RegistrationForm = () => {
   return (
      <>

         {/* form design start */}
         <div className='w-fit flex gap-5 lg:w-full md:w-full justify-center'>
            {/* Sign in form start */}
            <div className='w-1/2 shadow-white shadow-sm p-5 grid justify-center'>
               <h1 className='uppercase text-white mb-9'>Sign in</h1>
               <form>
                  <label className='block text-white opacity-50 uppercase mb-1' htmlFor="name">User Name</label>
                  <input className='py-1 px-2 block text-black w-[50vh] lg:w-[400px] rounded-full bg-transparent border-2 mb-2' type="text" name="text" placeholder='Enter your name' />

                  <label className='block text-white opacity-50 uppercase mb-1' htmlFor="password">Password</label>
                  <input className='py-1 px-2 block text-black w-[50vh] lg:w-[400px] rounded-full bg-transparent border-2 mb-2' type="password" name="password" placeholder='Enter your password' />

                  <input className='mt-2' type="checkbox" /> <span className='text-white'> Keep me signed in</span>

                  <button className='block text-white bg-blue-600 uppercase rounded-full py-1 px-2 mt-10 w-[50vh] lg:w-[400px] text-center'>Sign in</button>
               </form>
            </div>
            {/* Sign in form end */}


            {/* Registration form start */}
            <div className='w-1/2 lg:w-1/2 shadow-white shadow-sm p-5 grid justify-center'>
               <h1 className='uppercase text-white mb-9'>Sign up</h1>
               <form>
                  <label className='block text-white opacity-50 uppercase mb-1' htmlFor="name">User Name</label>
                  <input className='py-1 px-2 block text-black w-[50vh] lg:w-[400px] rounded-full bg-transparent border-2 mb-2' type="text" name="text" placeholder='Enter your name' />

                  <label className='block text-white opacity-50 uppercase mb-1' htmlFor="password">Password</label>
                  <input className='py-1 px-2 block text-black w-[50vh] lg:w-[400px] rounded-full bg-transparent border-2 mb-2' type="password" name="password" placeholder='Enter your password' />

                  <label className='block text-white opacity-50 uppercase mb-1' htmlFor="password">Repeat Password</label>
                  <input className='py-1 px-2 block text-black w-[50vh] lg:w-[400px] rounded-full bg-transparent border-2 mb-2' type="password" name="password" placeholder='Enter your password' />

                  <label className='block text-white opacity-50 uppercase mb-1' htmlFor="email">Email Address</label>
                  <input className='py-1 px-2 block text-black w-[50vh] lg:w-[400px] rounded-full bg-transparent border-2 mb-2' type="email" name="email" placeholder='Enter your email' />

                  <button className='block text-white bg-blue-600 uppercase rounded-full py-1 px-2 mt-10 w-[50vh] lg:w-[400px] text-center'>Sign in</button>
               </form>
            </div>
            {/* Registration form end */}
         </div>
         {/* form design end */}
      </>
   )
}

export default RegistrationForm
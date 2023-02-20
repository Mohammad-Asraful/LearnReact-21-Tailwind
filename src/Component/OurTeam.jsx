import React from 'react'
import '../App.css'

const OurTeam = (props) => {

   return (
      <>

         <div className="sm:max-w-md md:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
            <a href="https://tailwindcss.com">
               <img className="rounded-t-lg" src={props.img} alt="" />
            </a>
            <div className="p-5">

               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>

               <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>

               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{props.about}</p>
               <a href="https://tailwindcss.com" rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  More Details <span className='inline-block pl-3 text-xl font-extrabold'>&rarr;</span>
               </a>
            </div>
         </div>

      </>
   )
}

export default OurTeam
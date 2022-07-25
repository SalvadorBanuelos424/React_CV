import React from 'react'
import Port0 from '../assets/0sal.svg';

function Home() {
  return (
    <div className='w-1/2 mx-auto h-screen'>
      <div className='shadow-2xl my-auto mx-auto rounded-b-2xl bg-black'>     
        <img className='pt-36 w-52 mx-auto rounded-full' src={Port0} alt='me, as a drawing'/>
        <h1 className=' text-white pt-8 text-center text-4xl font-thin'>Hi my name is Salvador</h1>      
        <h1 className='text-2xl leading-relaxed font-thin text-white p-8 indent-6 '>Websites should be an extension a business.  Too many websites use the same cookie cutter templates.  I want to be able to help small businesses grow by offering a unique and capable internet landing spot.  We have already designed pages for a HOA and Los Angeles bases high school.  Going forward I want to unlock all of CSS's capabilities and use them to grow business. </h1>      
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import Sal from '../assets/sal.docx';

function Resume() {
  return (
    <div className='w-full h-screen'>
      <div className='fixed mx-44 mt-12 w-2/3 rounded-b-xl bg-black '>     
        <h1 className='text-4xl m-8 text-center text-white p-4 leading-relaxed'>Proficiencies and Goals</h1>      
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Optimize graphics and page speed for enhanced user experience</h1>      
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Check for brand consistency across the website</h1>      
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Perform timely functional testing of core website elements </h1>      
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Develop features to make websites mobile-friendly</h1>      
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Create tools that enhance user interaction in any browser</h1>      
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Implement on-site search engine optimization (SEO)</h1>        
        <h1 className='text-3xl m-12 text-white p-4 leading-relaxed'>- Create unique and useful landing spots to improve business (SEO)</h1>  
        <a className='p-4 m-12 rounded-full text-center text-4xl leading-relaxed text-sky-500 border-2 border-sky-500 bg-gray-600 hover:border-slate-400 hover:bg-transparent' href={Sal} download="myFile">Download file</a>
      </div>
    </div>
  )
}

export default Resume
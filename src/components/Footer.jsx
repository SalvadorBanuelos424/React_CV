import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiHeroku } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='fixed bottom-0 flex w-screen my-auto justify-center h-12 bg-gradient-to-b from-black to-gray-900 text-cyan-200 text-3xl'>
        <div className='flex m-2'>
            <a href='https://www.linkedin.com/in/salvador-banuelos-90b111245/'><FaLinkedin className='mx- hover:text-sky-400'/></a>
            <a href='https://github.com/SalvadorBanuelos424'><FaGithub href='https://github.com/SalvadorBanuelos424' className='mx- hover:text-sky-400'/></a>
            <a href='https://dashboard.heroku.com/apps' ><SiHeroku className='mx- hover:text-sky-400'/></a>    
            </div>
        <p className='text-xl'> &copy; 2022</p>
    </div>
  )
}

export default Footer
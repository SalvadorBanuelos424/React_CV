import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import Port1 from '../assets/1park.jpg';
import Port2 from '../assets/2air.png';
import Port3 from '../assets/3run.jpg';
import Port4 from '../assets/4hor.jpg';
import Port5 from '../assets/5duty.png';
import Port6 from '../assets/6pass.png';
import newport from '../assets/school.jpg';
import { FaGithub, FaLink } from 'react-icons/fa';



function Portfolio() {
  return (
    <div className='w-full h-full'>
      <div className='flex-wrap'>
        
      <PortfolioItem className='flex-auto' name='School Website' image={newport}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-REACT -TAILWING -JAVASCRIPT
        <a href='https://github.com/SalvadorBanuelos424/school-website.git'  ><FaGithub className='text-6xl m-4 hover:text-sky-400'/></a>
        <a  href='https://mern-school-website.herokuapp.com/'  ><FaLink className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>

        <PortfolioItem className='flex-auto' name='Park View' image={Port1}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HANDLEBARS -CSS -JAVASCRIPT
        <a href='https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community'  ><FaGithub className='text-6xl m-4 hover:text-sky-400'/></a>
        <a  href='https://park-place-association.herokuapp.com/'  ><FaLink className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Run Buddy' image={Port3}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS
        <a href='https://github.com/SalvadorBanuelos424/run-buddy'  ><FaGithub  className='text-6xl m-4 hover:text-sky-400 '/></a>
        <a href='https://salvadorbanuelos424.github.io/run-buddy/'  ><FaLink  className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Horizon' image={Port4}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS
        <a href='https://github.com/SalvadorBanuelos424/Horiseon'  ><FaGithub  className='text-6xl m-4 hover:text-sky-400 '/></a>
        <a href='https://salvadorbanuelos424.github.io/Horiseon/'  ><FaLink  className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Duty-Doer' image={Port5}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS -JAVASCRIPT
        <a href='https://github.com/SalvadorBanuelos424/Duty-Doer'  ><FaGithub className='text-6xl m-4 hover:text-sky-400 '/></a>
        <a href='https://github.com/SalvadorBanuelos424/Duty-Doer/settings/pages#:~:text=https%3A//salvadorbanuelos424.github.io/Duty%2DDoer/'  ><FaLink href='https://github.com/SalvadorBanuelos424/Duty-Doer/settings/pages#:~:text=https%3A//salvadorbanuelos424.github.io/Duty%2DDoer/' className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Password Generator' image={Port6}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS -JAVASCRIPT
        <a href='https://github.com/SalvadorBanuelos424/Random-Password-Generator'  ><FaGithub href='https://github.com/SalvadorBanuelos424/Random-Password-Generator' className='text-6xl m-4 hover:text-sky-400 '/></a>
        <a href='https://salvadorbanuelos424.github.io/Random-Password-Generator/'  ><FaLink  className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>

        <PortfolioItem className='flex-auto' name='AirPoll' image={Port2}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS -JAVASCRIPT
        <a href='https://github.com/SalvadorBanuelos424/AirPoll'  ><FaGithub  className='text-6xl m-4 hover:text-sky-400 '/></a>
        <a  href='https://salvadorbanuelos424.github.io/AirPoll/'><FaLink  className='text-6xl m-4 hover:text-sky-400 '/></a>
        </h1>
      </div>
    </div>
  )
}

export default Portfolio
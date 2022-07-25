import React from 'react'

function PortfolioItem({image, name}) {
    return (
      <div className='pt-16 '>
      <div className='mx-4 mt-8 p-4 rounded-t-2xl bg-sky-200 border-8 border-black'>
        <h1 className='p-2 text-4xl text-slate-700 font-bold'> {name} </h1>
        <div className='h-96 w-99' style={{backgroundImage: `url(${image})`}}/>
      </div></div>
    )
  }
  

export default PortfolioItem
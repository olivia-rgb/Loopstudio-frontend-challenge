import React, { useState } from 'react'
import "../App.css"

function Header() {
  const [isOpen, setisOpen] = useState(false)
  
  function hamburgerMenu(){
    setisOpen(!isOpen)
  }


  return (
    <div className='h-screen w-full  relative bg-[url("/mobile-img/image-hero.jpg")] md:bg-[url("/desktop-img/image-hero.jpg")] bg-no-repeat bg-cover bg-center'>
        <div className='w-[80%] max-w-[1400px] h-screen mx-auto '>
          <div className='flex justify-between  items-center pt-20'>
                <img src="/logo.svg" alt="" className='z-50 w-30' />
                  <div className={`absolute h-full  tracking-widest md:tracking-normal ${isOpen?"flex":"hidden"} justify-center md:flex md:justify-end pl-10 md:pr-0 md:items-center uppercase md:capitalize gap-6 top-0 w-full left-0 md:h-0 md:static md:w-auto bg-black md:bg-transparent flex-col md:flex-row text-white font-bold`}>
                    <a href="" className='   underline-hover hover:cursor-pointer '>about</a>
                    <a href="" className='   underline-hover hover:cursor-pointer '>careers</a>
                    <a href="" className='   underline-hover hover:cursor-pointer '>events</a>
                    <a href="" className='   underline-hover hover:cursor-pointer '>products</a>
                    <a href="" className='   underline-hover hover:cursor-pointer '>support</a>
                  </div>
                  <img src={isOpen? "/icon-close.svg":"/icon-hamburger.svg"} alt="hamburger" className=' z-50 md:hidden' onClick={hamburgerMenu}/>
          </div>
                 <div className=' flex justify-center md:justify-start h-full items-center w-full pb-20'>
                 <p className='  text-white   md:tracking-widest font-light border-2 p-4 md:p-6 text-5xl md:text-6xl max-w-xl '>IMMERSIVE EXPERIENCES THAT DELIVER</p>
                 </div>
                
        </div>

    </div>
  )
}

export default Header
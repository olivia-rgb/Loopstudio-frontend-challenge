import React from 'react'
import "../App.css"

function About() {
  return (
    <div className='w-[80%] max-w-[1400px]  mt-15 mb-20 md:my-30 flex flex-wrap justify-center relative gap-10 md:gap-20 items-end h-full mx-auto'>
        <div className='relative flex-[1_1_400px] mx-auto'>
          <img src="/desktop-img/image-interactive.jpg" alt="" className='hidden md:block object-cover w-full h-full' />
          <img src="/mobile-img/image-interactive.jpg" alt="" className='block md:hidden object-cover w-full h-full' />
          <div className='hidden md:block absolute top-0 right-0 translate-x-[10rem] w-[10rem] h-[150px] bg-gradient-to-r from-[#f38df3ef] to-[#bf40bf] '></div>
        </div>

        
        <div className=' flex flex-col max-w-lg flex-[1_1_400px] text-center md:text-left'>
            <h1 className='pb-4 md:pb-10 text-3xl  md:text-5xl font-semibold  uppercase tracking-wider text-black'>The leader in interactive VR </h1>
            <p className='text-[#696969]'>Founded in 2011, Loopstudios has been producing world-class virtual 
                reality projects for some of the best companies around the globe. 
                Our award-winning creations have transformed businesses through digital
                 experiences that bind to their brand.</p>
        </div>
    </div>
  )
}

export default About
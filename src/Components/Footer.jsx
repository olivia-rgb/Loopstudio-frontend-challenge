import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-black py-10 '>
        <div className='w-[80%] max-w-[1400px] flex flex-col md:flex-row   mx-auto'>
                <div className='flex flex-col justify-center w-full h-full items-center md:justify-start md:items-start'>
                        <img src="/logo.svg" alt="" className=' w-40 pb-10 md:pb-6' />
                        <div className='text-white text-lg font-bold flex flex-col md:flex-row gap-5 capitalize'>
                            <a href="" className='   underline-hover hover:cursor-pointer '>about</a>
                            <a href="" className='   underline-hover hover:cursor-pointer '>careers</a>
                            <a href="" className='   underline-hover hover:cursor-pointer '>events</a>
                            <a href="" className='   underline-hover hover:cursor-pointer '>products</a>
                            <a href="" className='   underline-hover hover:cursor-pointer '>support</a>
                        </div>
                </div>
                <div className='flex flex-col w-full h-full justify-center items-center md:items-end md:justify-between pt-15 md:pt-0'>
                    <div className='flex pb-10 md:pb-6 gap-5'>
                        <img src="/icon-instagram.svg" alt="" />
                        <img src="/icon-pinterest.svg" alt="" />
                        <img src="/icon-twitter.svg" alt="" />
                        <img src="/icon-facebook.svg" alt="" />
                    </div>
                    <div className='text-white w-80 text-lg'>
                        <p>© 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Footer
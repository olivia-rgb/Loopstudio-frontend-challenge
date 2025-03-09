import React from 'react'

function Creations() {
  return (
    <div className='w-[80%] max-w-[1400px] mx-auto h-full pb-15'>
      <div className='flex flex-col '>
        <div className='flex justify-between items-center pb-10'>
            <p className='text-3xl md:text-5xl text-center mx-auto md:mx-0 md:text-left uppercase text-black'> Our creations</p>
            <p className=' hidden md:block border-2 uppercase text-center text-sm px-6 py-2 font-[Josefin Sans] border-[#8c8c8c]'>See all</p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10'>
            <div className=' h-50 md:h-100 bg-[url("/mobile-img/image-deep-earth.jpg")] md:bg-[url("/desktop-img/image-deep-earth.jpg")] bg-no-repeat bg-cover bg-center text-white flex flex-col justify-end p-8 text-3xl font-light'>
                 <p> DEEP</p>
                 <p> EARTH</p>
            </div>
            <div className=' h-50 md:h-100 bg-[url("/mobile-img/image-night-arcade.jpg")] md:bg-[url("/desktop-img/image-night-arcade.jpg")] bg-no-repeat bg-cover text-white flex flex-col  bg-center justify-end p-8 text-3xl font-light'>
                 <p> NIGHT</p>
                 <p> ARCADE</p>
            </div>
            <div className=' h-50 md:h-100 bg-[url("/desktop-img/image-soccer-team.jpg")] md:bg-[url("/desktop-img/image-soccer-team.jpg")] bg-no-repeat bg-cover text-white flex flex-col bg-center justify-end p-8 text-3xl font-light'>
                 <p> SOCCER</p>
                 <p> TEAM</p>
            </div>
            <div className=' h-50 md:h-100 bg-[url("/desktop-img/image-grid.jpg")] md:bg-[url("/desktop-img/image-grid.jpg")] bg-no-repeat bg-cover text-white flex flex-col bg-center justify-end p-8 text-3xl font-light'>
                 <p> THE</p>
                 <p> GRID</p>
            </div>
            <div className='  h-50 md:h-100 bg-[url("/desktop-img/image-from-above.jpg")] md:bg-[url("/desktop-img/image-from-above.jpg")]  bg-no-repeat bg-cover text-white flex flex-col bg-center justify-end p-8 text-3xl font-light'>
                 <p> FROM UP</p>
                 <p> ABOVE VR</p>
            </div>
            <div className=' h-50 md:h-100 bg-[url("/desktop-img/image-curiosity.jpg")] md:bg-[url("/desktop-img/image-curiosity.jpg")] bg-center bg-no-repeat bg-cover text-white flex flex-col justify-end p-8 text-3xl font-light'>
                 <p> THE </p>
                 <p> CURIOSITY</p>
            </div>
            <div className=' h-50 md:h-100  bg-[url("/desktop-img/image-pocket-borealis.jpg")] md:bg-[url("/desktop-img/image-pocket-borealis.jpg")] bg-center bg-no-repeat bg-cover text-white flex flex-col justify-end p-8 text-3xl font-light'>
                 <p> POCKET</p>
                 <p> BOREALIS</p>
            </div>
            <div className=' h-50 md:h-100 bg-[url("/desktop-img/image-fisheye.jpg")] md:bg-[url("/desktop-img/image-fisheye.jpg")] bg-center bg-no-repeat bg-cover text-white flex flex-col justify-end p-8 text-3xl font-light'>
                 <p> MAKE IT</p>
                 <p> FISHEYE</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Creations
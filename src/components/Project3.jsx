import React from 'react'
import { Typography,Carousel } from '@material-tailwind/react'
import { AdoptDrawer } from '../components'
import adopt__banner from '../public/adopt__banner.png'
import adopt__1 from '../public/adopt__1.png'
import adopt__2 from '../public/adopt__2.png'

const Project3 = () => {
    return (
        <div className='grid lg:grid-cols-9 lg:mt-5'>
        <div className='col-span-2 inline-block'>
          <Typography
            variant="h1"
            id="Inter"
            className="font-bold lg:text-6xl text-3xl lg:mt-[2rem]"
          >
            Adopt
          </Typography>
          <div className='mt-5 flex gap-2'>
                <AdoptDrawer/>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-brands fa-github fa-2xl mr-1 '></li>
                  <a href="https://github.com/DarkVader121/adopt-js" rel="noopener" target="_blank">
                      Github
                  </a>
                </div>

          </div>
        </div>
        <div className='col-span-7 lg:px-10 lg:pb-10 mt-[1rem]'>
        <Carousel 
          transition={{ duration: 2 }} 
          className="rounded-xl"      
          >
          <img
            src={adopt__banner}
            alt="image 1"
            className=" w-full object-cover"
          />
          <img
            src={adopt__1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={adopt__2}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        </div>
      </div>
      )
}

export default Project3
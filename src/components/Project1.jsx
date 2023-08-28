import React from 'react'
import {ChurchDrawer} from '../components'
import { Typography, Button, Carousel, IconButton } from '@material-tailwind/react'
import church__banner from '../public/church__banner.png'
import church__1 from '../public/church__1.png'
import church__2 from '../public/church__2.png'


const Project1 = () => {
    return (
        <div className='grid lg:grid-cols-9'>
        <div className='col-span-2 inline-block'>
          <Typography
            variant="h1"
            id="Inter"
            className="font-bold"
          >
             Church Monitoring System
          </Typography>
          <div className='mt-5 flex gap-2'>
                <ChurchDrawer/>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-brands fa-github fa-2xl mr-1 '></li>
                  <a href="https://github.com/DarkVader121/Church-Monitoring-System-" rel="noopener" target="_blank">
                      Github
                  </a>
                </div>

          </div>
        </div>
        <div className='col-span-7 px-10 pb-10'>
        <Carousel 
          transition={{ duration: 2 }} 
          className="rounded-xl"      
          >
          <img
            src={church__banner}
            alt="image 1"
            className=" w-full object-cover"
          />
          <img
            src={church__1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={church__2}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        </div>
      </div>
      )
}

export default Project1
import React from 'react'
import { Typography, Carousel } from '@material-tailwind/react'
import {  CarDrawer } from '../components'
import car__banner from '../public/car__banner.png'
import car__1 from '../public/cars__1.png'
import car__2 from '../public/cars__2.png'

const Project2 = () => {
    return (
        <div className='grid lg:grid-cols-9 lg:mt-10 mt-3'>
        <div className='col-span-2 inline-block'>
          <Typography
            variant="h1"
            id="Inter"
            className="font-bold lg:text-6xl text-3xl lg:mt-[2rem]" 
          >
            CarHub
          </Typography>
          <div className='lg:mt-5 mt-3 flex gap-2'>
                <CarDrawer/>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-brands fa-github fa-2xl mr-1 '></li>
                  <a href="https://github.com/DarkVader121/Rent-a-car" rel="noopener" target="_blank">
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
            src={car__banner}
            alt="image 1"
            className=" w-full object-cover"
            loading="lazy"
          />
          <img
            src={car__1}
            alt="image 2"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <img
            src={car__2}
            alt="image 3"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Carousel>
        </div>
      </div>
      )
}

export default Project2
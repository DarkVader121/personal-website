import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CustomButton, CarDrawer } from '../components'
import car__banner from '../public/car__banner.png'

const Project2 = () => {
    return (
        <div className='grid lg:grid-cols-9 mt-10'>
        <div className='col-span-2 inline-block'>
          <Typography
            variant="h1"
            id="Inter"
            className="font-bold"
          >
            CarHub
          </Typography>
          <div className='mt-5 flex gap-2'>
                <CarDrawer/>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-brands fa-github fa-2xl mr-1 '></li>
                  <a href="https://github.com/DarkVader121/Rent-a-car" rel="noopener" target="_blank">
                      Github
                  </a>
                </div>
          </div>
        </div>
        <div className='col-span-7'>
          <img
              src={car__banner}
              alt="image 1"
              width={1200}
              className=" object-cover ml-auto mr-auto"
            />
        </div>
      </div>
      )
}

export default Project2
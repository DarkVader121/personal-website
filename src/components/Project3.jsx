import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CustomButton, AdoptDrawer } from '../components'
import adopt__banner from '../public/adopt__banner.png'


const Project3 = () => {
    return (
        <div className='grid lg:grid-cols-9 mt-10'>
        <div className='col-span-2 inline-block'>
          <Typography
            variant="h1"
            id="Inter"
            className="font-bold"
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
        <div className='col-span-7'>
          <img
              src={adopt__banner}
              alt="image 1"
              width={1200}
              className=" object-cover ml-auto mr-auto"
            />
        </div>
      </div>
      )
}

export default Project3
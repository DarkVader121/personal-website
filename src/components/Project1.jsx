import React from 'react'
import {CustomButton} from '../components'
import { Typography } from '@material-tailwind/react'
import church__banner from '../public/church__banner.png'

const Project1 = () => {
  return (
    <div className='grid lg:grid-cols-9 mt-10'>
    <div className='col-span-2 inline-block'>
      <Typography
        variant="h1"
        id="Inter"
        className="font-bold"
      >
        Church Monitoring System
      </Typography>
      <div className='mt-5 flex gap-2'>
      <CustomButton
       btnSize={`sm`}
       btnColor={`black`}
       btnVariant={`outlined`}
       title={`View Details`}
       leftIcon={`fa-solid fa-circle-info fa-2xl flex items-center mr-1`}
       containerStyles={`p-3`}
      />
      <CustomButton
       btnSize={`sm`}
       btnColor={`black`}
       btnVariant={`outlined`}
       title={`Github`}
       leftIcon={`GitHub fa-brands fa-github fa-2xl flex items-center mr-1`}
       containerStyles={`p-3`}
      />
      </div>
    </div>
    <div className='col-span-7'>
      <img
          src={church__banner}
          alt="image 1"
          width={1200}
          className=" object-cover ml-auto mr-auto"
        />
    </div>
  </div>
  )
}

export default Project1
import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CustomButton } from '../components'
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
                title={`GitHub`}
                leftIcon={`fa-brands fa-github fa-2xl flex items-center mr-1`}
                containerStyles={`p-3`}
                />
                <CustomButton
                btnSize={`sm`}
                btnColor={`black`}
                btnVariant={`gradient`}
                title={`Open Project`}
                leftIcon={` fa-solid fa-globe fa-2xl flex items-center mr-1`}
                containerStyles={`p-3`}
                />
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
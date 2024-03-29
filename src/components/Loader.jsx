import React from 'react'
import { Typography } from '@material-tailwind/react'

const Loader = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen gap-10'>
        <div className="loader__icon">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
        <div className='hidden lg:block'>
          <Typography 
            variant="h1"
            id="Inter"
            className="font-extrabold lg:text-8xl">
            Erron John
          </Typography>
        </div>
    </div>
      </>
  )
}

export default Loader
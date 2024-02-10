import React from 'react'
import { useState } from 'react';
import {CustomButton} from '.'
import { Drawer, Typography, IconButton} from "@material-tailwind/react";

const CarDrawer = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true); 
    const closeDrawer = () => setOpen(false);
  return (
    <React.Fragment>
    <CustomButton
    btnSize={`sm`}
    btnColor="gray"
    btnVariant={`outlined`}
    title={`View Details`}
    leftIcon={`fa-solid fa-circle-info fa-2xl flex items-center mr-1`}
    containerStyles={`p-3`}
    textStyles={`Inter`}
    handleClick={openDrawer}
   />
    <Drawer open={open} onClose={closeDrawer} className='p-4 bg-gray-500' overlay={false} size={300}>
        <div className='mb-6 flex justify-between'>
            <Typography variant="h1" id="Inter" className="font-bold text-white">
                Rent a Car
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            </IconButton>
        </div>
        <Typography
            variant="paragraph"
            id="Inter"
            className="mb-10"
        >
        Rent a Car is a project I developed using Next.js and TypeScript. The core functionality of this application revolves around fetching car data from a RapidAPI source. One of the more intricate aspects of the project was working with TypeScript to implement multiple prop passing.
        </Typography>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-solid fa-globe fa-2xl mr-1 '></li>
                  <a href="https://rent-a-car-2i9b.vercel.app/" rel="noopener" target="_blank" id='Inter' className='hover:text-white hover:scale-105 duration-300 text-sm' >
                     https://rent-a-car-2i9b.vercel.app/
                  </a>
                </div>
    </Drawer>
    </React.Fragment>
  )
}

export default CarDrawer
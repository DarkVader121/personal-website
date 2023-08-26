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
    btnColor={`black`}
    btnVariant={`outlined`}
    title={`View Details`}
    leftIcon={`fa-solid fa-circle-info fa-2xl flex items-center mr-1`}
    containerStyles={`p-3`}
    textStyles={`Inter`}
    handleClick={openDrawer}
   />
    <Drawer open={open} onClose={closeDrawer} className='p-4' overlay={false} size={400}>
        <div className='mb-6 flex items-start justify-around'>
            <Typography variant="h1" id="Inter" color="black" className="font-bold">
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
            variant="lead"
            id="Inter"
            className="mb-8 pr-4"
        >
        Rent a Car is a project I developed using Next.js and TypeScript. The core functionality of this application revolves around fetching car data from a RapidAPI source. One of the more intricate aspects of the project was working with TypeScript to implement multiple prop passing. This proved to be a bit challenging, but it also provided valuable learning experiences. TypeScript's static typing and type checking were crucial in ensuring the correctness of data passed between components. As a developer, it was rewarding to overcome these challenges and create a robust and reliable application like Carhub.
        </Typography>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-solid fa-globe fa-2xl mr-1 '></li>
                  <a href="https://rent-a-car-2i9b.vercel.app/" rel="noopener" target="_blank">
                      View Site
                  </a>
                </div>
    </Drawer>
    </React.Fragment>
  )
}

export default CarDrawer
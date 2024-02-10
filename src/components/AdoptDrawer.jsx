import React from 'react'
import { useState } from 'react';
import {CustomButton} from '.'
import { Drawer, Typography, IconButton} from "@material-tailwind/react";

const AdoptDrawer = () => {
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
            <Typography variant="h1" id="Inter" color="black" className="font-bold text-white text-4xl">
                Adopt
            </Typography>
            <IconButton variant="text" onClick={closeDrawer}>
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
            className="mb-8 pr-4"
        >
                I've recently wrapped up my personal project called "Adopt," constructed with ReactJS. To display data, I utilized an API from RapidAPI, which allowed me to showcase information to users effectively. Material Tailwind was used for the website's front-end design, giving it a sleek and modern appearance without direct user interaction with the API.        </Typography>
                <div className='border-solid flex items-center rounded-full  border-black'>
                  <li className='fa-solid fa-globe fa-lg mr-1 '></li>
                  <a href="https://adopt-cyan.vercel.app/" rel="noopener" target="_blank" id="Inter" className='hover:text-white hover:scale-105 duration-300'>
                    https://adopt-cyan.vercel.app/
                  </a>
                </div>
    </Drawer>
    </React.Fragment>
  )
}

export default AdoptDrawer
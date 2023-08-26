import React from 'react'
import { useState } from 'react';
import {CustomButton} from '../components'
import { Button, Drawer, Typography, IconButton} from "@material-tailwind/react";

const ChurchDrawer = () => {
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
                Church Monitoring System
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
            During my college days, I worked on my thesis project,
            which was a Church Monitoring System. This system was 
            built using Bootstrap and the Laravel framework, along 
            with Laragon. It allowed for efficient management and 
            tracking of church activities and resources, making it 
            easier for church administrators to keep everything 
            organized and accessible.
        </Typography>
    </Drawer>
    </React.Fragment>
  )
}

export default ChurchDrawer
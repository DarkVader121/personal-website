import React from 'react'
import { Typography } from '@material-tailwind/react'
import tailwind__2 from '../public/tailwind__2.png'

const FrontendDevelopment = () => {
  return (
    <div>
        <Typography
            variant="h1"
            id="Inter"
            className="flex text-6xl"
        >
              Front-End &nbsp; <div className='text-white'>Development </div> 
        </Typography>
        <div className='grid lg:grid-cols-2 justify-items-center mt-5'>
            <div>
            <div className='grid grid-cols-4 mt-5'>
                <div className='flex items-center'>
                    <li className='fa-brands fa-html5 fa-2xl text-5xl' > </li>
                </div>
                <div className='col-span-3 ml-3'>
                    <Typography
                        variant="h4"
                        id="Inter"
                        className=" "
                    >
                        HTML 5 
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className=""
                    >
                        Experienced
                    </Typography>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-5'>
                <div className='flex items-center'>
                    <li className='fa-brands fa-css3-alt fa-2xl text-5xl' > </li>
                </div>
                <div className='col-span-3 ml-3'>
                    <Typography
                        variant="h4"
                        id="Inter"
                        className=" "
                    >
                        CSS 3
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className=""
                    >
                        Experienced
                    </Typography>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-5'>
                <div className='flex items-center'>
                    <li className='fa-brands fa-js fa-2xl text-5xl' > </li>
                </div>
                <div className='col-span-3 ml-3'>
                    <Typography
                        variant="h4"
                        id="Inter"
                        className=" "
                    >
                        Javascript
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className=""
                    >
                        Intermediate
                    </Typography>
                </div>
            </div>
            </div>
            <div>
                <div className='grid grid-cols-4 mt-5'>
                    <div className='flex items-center'>
                        <img src={tailwind__2} width={50} height={50} alt="material tailwind" />
                    </div>
                    <div className='col-span-3 ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Material Tailwind
                        </Typography>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className=""
                        >
                            Intermediate
                        </Typography>
                    </div>
                </div>
                <div className='grid grid-cols-4 mt-5'>
                    <div className='flex items-center'>
                        <li className='fa-brands fa-bootstrap fa-2xl text-5xl' > </li>
                    </div>
                    <div className='col-span-3 ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Bootstrap
                        </Typography>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className=""
                        >
                            Intermediate
                        </Typography>
                    </div>
                </div>
                <div className='grid grid-cols-4 mt-5'>
                    <div className='flex items-center'>
                        <li className='fa-brands fa-react  fa-2xl text-5xl' > </li>
                    </div>
                    <div className='col-span-3 ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            React
                        </Typography>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className=""
                        >
                            Intermediate
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontendDevelopment
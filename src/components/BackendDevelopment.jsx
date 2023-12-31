import React from 'react'
import { Typography } from '@material-tailwind/react'

const BackendDevelopment = () => {
    return (
        <div className='hover:scale-105 duration-300 lg:mt-0 mt-[1rem]'>
            <Typography
                variant="h1"
                id="Inter"
                className="flex lg:text-6xl text-3xl "
            >
                  Back-End &nbsp; <div className='text-white'>Development </div> 
            </Typography>
            <div className='grid lg:grid-cols-2 lg:justify-items-center lg:mt-5'>
                <div>
                <div className='grid grid-cols-4'>
                    <div className='flex items-center'>
                        <li className='fa-brands fa-laravel fa-2xl text-5xl' > </li>
                    </div>
                    <div className='col-span-3 lg:ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Laravel
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
                <div className='grid grid-cols-4 lg:mt-5'>
                    <div className='flex items-center'>
                        <li className='fa-brands fa-git fa-2xl text-5xl' > </li>
                    </div>
                    <div className='col-span-3 lg:ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Git
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
                <div className='grid grid-cols-4 lg:mt-5'>
                    <div className='flex items-center'>
                        <li className='fa-brands fa-github fa-2xl text-5xl' > </li>
                    </div>
                    <div className='col-span-3 lg:ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Github
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
                </div>
                <div>
                    <div className='grid grid-cols-4 lg:mt-5'>
                        <div className='flex items-center'>
                            <li className='fa-solid fa-user fa-2xl text-5xl'></li>
                        </div>
                        <div className='col-span-3 lg:ml-3'>
                            <Typography
                                variant="h4"
                                id="Inter"
                                className=" "
                            >
                                Postman
                            </Typography>
                            <Typography
                                variant="lead"
                                id="Inter"
                                className=""
                            >
                                Beginner
                            </Typography>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 lg:mt-5'>
                        <div className='flex items-center'>
                            <li className='fa-brands fa-bitbucket fa-2xl text-5xl' > </li>
                        </div>
                        <div className='col-span-3 lg:ml-3'>
                            <Typography
                                variant="h4"
                                id="Inter"
                                className=" "
                            >
                                Bitbucket
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

export default BackendDevelopment
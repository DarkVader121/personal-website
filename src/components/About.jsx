import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Hoobies } from '../constants'


const About = () => {
  return (
    <>
    <div className='mb-10  lg:px-5'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center"
        >
           Get To Know More
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="text-9xl mt-10 text-center"
        >
            About Me
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="text-7xl mt-10"
        >
            Erron John
        </Typography>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-gray-500"
        >
            Front-end Developer
        </Typography>
        <Typography
            variant="lead"
            id="Inter"
            className="mt-5 "
        >    
        I have a strong background in BS Information Technology with a specialization in React and Laravel, backed by over 480 hours of hands-on experience during my On-The-Job Training (OJT). My expertise spans both frontend and backend development, and I've honed my skills through education, including the attainment of a Meta Front-End Developer Professional Certificate. Additionally, I have expanded my proficiency in mobile app development through online courses in React Native. My commitment to staying up-to-date with the latest technologies and frameworks ensures that I can deliver top-notch solutions in the dynamic field of Information Technology.
        </Typography>

        <div className='grid lg:grid-cols-2 mt-20 mb-20'>
            <div className='grid lg:grid-cols-3'>
                <div className='flex justify-end mt-10'>
                    <li className='fa-solid fa-desktop fa-2xl' style={{fontSize:'4rem'}}></li>
                </div>
                <div className='col-span-2 justify-start'>
                    <Typography
                        variant='h1'
                        id="Inter"
                        className="ml-3"
                    >
                        Experience
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="ml-3 text-3xl"
                    >
                     <b>480+</b> OJT Hours  
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="ml-3"
                    >
                         Frontend + Backend Development
                    </Typography>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='flex justify-end mt-10'>
                    <li className='fa-solid fa-graduation-cap fa-2xl' style={{fontSize:'4rem'}}></li>
                </div>
                <div className='col-span-2 justify-start'>
                    <Typography
                        variant="h1"
                        id="Iter"
                        className="ml-3"
                    >
                        Education
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="ml-3 text-3xl"
                    >
                       <b>4 yrs</b> BS Information Technology
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="ml-3"
                    >
                       <b> 30 days </b> Meta Front-End Developer Professional Certificate <br /> <div className='ml-20'>   and React Native (Online)</div>
                    </Typography>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-gray-500 lg:px-5 lg:py-2'>
        <div className='grid lg:grid-cols-9 mt-5'>
            <div className='flex items-center'>
                <li className='fa-solid fa-border-all fa-2xl' style={{fontSize:"4rem"}}></li>
                <div className='inline-block'>
                <Typography
                    variant="lead"
                    id="Inter"
                    className="ml-3 text-3xl font-bold"
                >
                 Others 
                </Typography>
                <Typography 
                    className="lead"
                    id="Inter"
                    className="ml-3 font-bold"
                >
                    2000 - 2023
                </Typography>
                </div>
            </div>
            <div className='col-span-8'>
            <div className='ml-12 flex justify-around mt-5'>
            
            {Hoobies.map((Hooby) => (
                <div key={Hooby} value={Hooby}>
                    <Typography
                        variant="paragraph"
                        id="Inter"
                        className=""
                    >
                    {Hooby}
                    </Typography>
                </div>
            ))
            }
        </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default About
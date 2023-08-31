import { Typography, Tooltip } from '@material-tailwind/react'
import React from 'react'
import { Hoobies } from '../constants'
import {motion} from 'framer-motion'


const About = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
    >
    <div className='lg:mb-0 lg:px-[4rem] lg:pt-[3rem] px-[1rem] pt-[1rem] overflow-hidden'>
        <Typography
            variant="lead"
            id="Inter"
            className="lg:text-2xl text-sm font-bold text-center"
        >
           Get to know more
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-9xl text-5xl lg:mt-0 text-center"
        >
            About me
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-7xl lg:mt-[1rem] text-4xl mt-5"
        >
            Erron John Lapac
        </Typography>
        <Typography
            variant="lead"
            id="Inter"
            className="lg:text-3xl text-md font-bold text-gray-500"
        >
            Front-end Developer
        </Typography>
        <Typography
            variant="lead"
            id="Inter"
            className="lg:mt-5 mt-[1rem] lg:text-3xl text-sm"
        >
        I have a strong background in Information Technology with a specialization in Web Development using React and Laravel and backed with a solid hands-on experience during my On-The-Job Training (OJT). My expertise spans both frontend and backend development, and I've honed my skills through formal education, including my attainment of Meta Front-End Developer Professional Certificate. Furthermore  , I have expanded my proficiency in mobile app development through online courses in React Native. My commitment to staying up-to-date with the latest technologies and frameworks ensures that I can deliver top-notch solutions in the dynamic field of Information Technology.
        </Typography>

        <div className='lg:hidden mt-5'>
            <div className='grid grid-cols-8'>
                <div className='mr-3 col-span-1 flex mt-1 justify-end items-start'>
                 <i class="fa-solid fa-desktop text-2xl"></i>
                </div>

                <div className='col-span-7  text-2xl '>
                    <Typography
                        variant='h3'
                        id='Inter'
                    >
                        Experience 
                    </Typography>
                    <Typography
                        variant='h5'
                        id='Inter'
                    >
                        <b>480+ </b> OJT Hours 
                    </Typography>
                    <Typography
                        variant='small'
                        id='Inter'
                    >
                        Front-end & Back-end Development
                    </Typography>
                </div>
            </div>
            <div className='grid grid-cols-8 mt-5'>
                <div className='mr-3 col-span-1 flex mt-1 justify-end items-start'>
                 <i class="fa-solid fa-graduation-cap text-2xl"></i>
                </div>
                <div className='col-span-7  text-2xl '>
                    <Typography
                        variant='h3'
                        id='Inter'
                    >
                        Education
                    </Typography>
                    <Typography
                        variant='h5'
                        id='Inter'
                    >
                        BS Information Technology
                    </Typography>
                    <Typography
                        variant='small'
                        id='Inter'
                    >
                        Meta Front-End Developer Professional Certificate and React Native (Online)
                    </Typography>
                </div>
            </div>
        </div>

        <div className='hidden lg:flex lg:justify-center lg:grid-cols-2 lg:mt-20 lg:mb-20 mt-5 mb-5'>
            <motion.div 
            whileHover={{ scale:1.1}}
            whileTap={{ scale: 0.9}}
            className='grid lg:grid-cols-3 lg:mx-20 lg:mt-2'>
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
                     Internship at GlobalOr  
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="ml-3"
                    >
                         Frontend + Backend Development
                    </Typography>
                </div>
            </motion.div>
            <motion.div 
            whileHover={{ scale:1.1}}
            whileTap={{ scale: 0.9}}
            className='grid grid-cols-3 lg:mx-auto'>
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
                        BS Information Technology at &nbsp;
                        <Tooltip content="Holy Name University" placement="right-start">
                        HNU
                        </Tooltip>
                    </Typography>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="ml-3 "
                    >
                    Meta Front-End Developer Professional Certificate <br /> React Native Certificate
                    </Typography>
                </div>
            </motion.div>
        </div>
    </div>
    <div className='hidden lg:flex bg-gray-500 lg:px-5 '>
        <div className='grid lg:grid-cols-9 '>
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
                    variant="lead"
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
    <div className="lg:hidden bg-gray-500 px-[1rem] mt-5">
            <div className='grid grid-cols-8'>
                <div className='mr-3 col-span-1 flex mt-1 justify-end items-start'>
                   <i class="fa-solid fa-border-all text-2xl"></i>
                </div>

                <div className='col-span-7  text-2xl '>
                    <Typography
                        variant='h3'
                        id='Inter'
                    >
                        Others
                    </Typography>
                    <Typography
                        variant='small'
                        id='Inter'
                    >
                        2000 - 2023
                    </Typography>
                    <div className='marquee'>
                        <div className='marquee__group'>
                            <Typography
                                variant='small'
                                id='Inter'
                            >
                                Singing, Dancing, Movie Nights, Camping, Fishing, Mobile and PC Games, Gardening
                            </Typography>
                        </div>
                        <div aria-hidden="true" className='marquee__group'>
                            <Typography
                                variant='small'
                                id='Inter'
                            >
                                Singing, Dancing, Movie Nights, Camping, Fishing, Mobile and PC Games, Gardening,
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </motion.div>
  )
}

export default About
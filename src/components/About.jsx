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
            I'm an IT graduate specializing in React and Laravel web development, with hands-on experience from OJT. I'm skilled in both front-end and back-end development, holding a Meta Front-End Developer Professional Certificate and React Native Certificate. I've also enhanced my mobile app development skills with React Native courses, and I'm dedicated to staying current in the ever-evolving tech world.
        </Typography>

        <div className='lg:hidden mt-5'>
            <div className='grid grid-cols-8'>
                <div className='mr-3 col-span-1 flex mt-1 justify-end items-start'>
                 <i className="fa-solid fa-desktop text-2xl"></i>
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
                 <i className="fa-solid fa-graduation-cap text-2xl"></i>
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
    <div className='hidden lg:flex bg-gray-500 lg:px-5 lg:py-[1rem]'>
        <div className='grid lg:grid-cols-8 items-center'>
            <div className='flex items-center col-span-2'>
                <li className='fa-solid fa-border-all fa-2xl' style={{fontSize:"4rem"}}></li>
                <div className='inline-block'>
                <Typography
                    variant="lead"
                    id="Inter"
                    className="ml-3 text-3xl font-bold"
                >
                 Skills and Competencies 
                </Typography>
                </div>
            </div>
            <div className='ml-[2rem] col-span-6 '>
                    <div className='flex justify-evenly items-center '>
                    {Hoobies.map((Hooby) => (
                        <div key={Hooby} value={Hooby}>
                            <Typography
                                variant="paragraph"
                                id="Inter"
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
                   <i className="fa-solid fa-border-all text-2xl"></i>
                </div>

                <div className='col-span-7  text-2xl '>
                    <Typography
                        variant='h3'
                        id='Inter'
                    >
                        Skills and Competencies 
                    </Typography>
                    <div className='marquee'>
                        <div className='marquee__group'>
                            <Typography
                                variant='small'
                                id='Inter'
                            >
                                Coding Enthusiast, Web Developer, Troubleshooting Maestro, Mobile App Developer, Team Collaborator, Attention to detail, Fast Learner, Analytical Thinking,
                            </Typography>
                        </div>
                        <div aria-hidden="true" className='marquee__group'>
                            <Typography
                                variant='small'
                                id='Inter'
                            >
                                Coding Enthusiast, Web Developer, Troubleshooting Maestro, Mobile App Developer, Team Collaborator, Attention to detail, Fast Learner, Analytical Thinking,
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
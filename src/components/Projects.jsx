import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Project1, Project2, Project3 } from '../components'
import { motion } from 'framer-motion'

const Projects = () => {
  
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='lg:px-[4rem] lg:pt-[3rem] px-[1rem] pt-[1rem]'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center lg:text-2xl text-md"
        >
           Browse my recent 
        </Typography>
        <Typography
          variant="h1"
          id="Inter"
          className="font-bold text-center lg:text-9xl text-5xl"
        >
          Projects
        </Typography>
        <Project1/>
        <Project3/>
        <Project2/>
        
    </motion.div>
  )
}

export default Projects
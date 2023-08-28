import { Typography, Carousel } from '@material-tailwind/react'
import React from 'react'
import { Project1, Project2, Project3 } from '../components'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='px-5 pt-5'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center"
        >
           Browse My Recent 
        </Typography>
        <Typography
          variant="h1"
          id="Inter"
          className="font-bold text-center text-9xl"
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
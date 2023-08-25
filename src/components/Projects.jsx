import { Typography, Carousel } from '@material-tailwind/react'
import React from 'react'
import { Project1, Project2, Project3 } from '../components'


const Projects = () => {
  return (
    <div className='px-5 pt-5'>
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
        
    </div>
  )
}

export default Projects
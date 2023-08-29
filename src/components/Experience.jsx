import React from 'react'
import { Typography, 
         Timeline,
         TimelineItem,
         TimelineConnector,
         TimelineHeader,
         TimelineIcon,
         TimelineBody, } from '@material-tailwind/react'
import {motion} from 'framer-motion'
import { MobileExperience} from '../components'


const Experience = () => {
  return (
    <>
    <motion.div
    initial={{
      opacity:0,
    }}
    whileInView={{
      opacity:1, 

    }}
    transition={{duration:3}}
    className='lg:pt-5 pt-3 hidden lg:block bg-black'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold  lg:text-2xl text-sm  text-center text-white"
        >
           My Professional 
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-9xl text-white lg:mt-10 mt-[1rem] text-center"
        >
            Work Experience
        </Typography>
        <div className="lg:mx-auto px-[1rem] w-[40rem] lg:mt-20 mt-[2rem] mb-20">
      <Timeline className='text-white '>
        <TimelineItem  >
          <TimelineConnector/>
          <TimelineHeader className="h-3 ">
            <TimelineIcon />
            <div className='inline-block items-center'>
            <Typography variant="h3" id="Inter" className="lg:text-2xl text-lg">
             <b> GlobalOR Inc. </b> / 2023
            </Typography>
            <Typography variant="lead" id="Inter" className="lg:text-2xl text-sm">
              Intern
            </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-[5rem] ">
            <Typography variant="lead" id="Inter" className="lg:mt-10 mt-[1rem] text-lg ">
            During the enriching experience of my internship in May 2022, I had the privilege to work with  GLOBALOR PHILIPPINES, located in the scenic locale of Bohol, Philippines. In this role, I  embraced a dual responsibility as both a  Frontend Developer and a Quality Assurance  Tester, harnessing my skills and expertise in  ReactJS and Laravel to contribute to the team's  success and growth.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <div>
            <Typography variant="h3" id="Inter" className="lg:text-2xl text-lg">
             <b>Upwork Inc. </b> / 2020
            </Typography>
            <Typography variant="lead" id="Inter" className="lg:text-2xl text-sm">
              Freelancer
            </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-[5rem]">
          <Typography variant="lead" id="Inter" className="lg:mt-10 mt-[1rem] text-lg ">
          In June 2020, I worked as a Virtual Assistant  Freelancer for UPWORK GLOBAL INC., where I  conducted research, gathered data, and   managed lead databases to support  targeted customer segment identification  and lead generation efforts.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem  >
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <div>
            <Typography variant="h3" id="Inter" className="lg:text-2xl text-lg">
             <b>JJS’s Data System </b>/ 2016 
            </Typography>
            <Typography variant="lead" id="Inter" className="lg:text-2xl text-sm">
              Freelancer
            </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
          <Typography variant="lead" id="Inter" className="lg:mt-10 mt-[1rem] text-lg ">
          In the summer of 2016, I served as a Lead  Generation Assistant at JJS DATA MINING in Bohol, Philippines, excelling in virtual assistant services with a focus on lead generation and social media, adeptly researching and identifying potential leads and meticulously maintaining lead databases and interactions.            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
    </motion.div>
    <MobileExperience/>
    </>
  )
}

export default Experience
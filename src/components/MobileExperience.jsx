import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'

const MobileExperience = () => {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true)

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur); 
  const handleOpen = (value) => setOpen(open === value ? 0 : value); 
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='bg-black p-[1rem] lg:hidden'
    >
        <Typography
            variant="lead"
            id="Inter"
            className="text-sm font-bold text-center text-white"
        >
           My Professional 
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className=" text-5xl text-center text-white"
        >
            Experience
        </Typography>
        <div>

        </div>
        <Accordion open={alwaysOpen} >
          <AccordionHeader onClick={handleAlwaysOpen}> <span className='text-white' id="Inter"> GlobalOr / 2023 / Intern </span> </AccordionHeader>
          <AccordionBody>
            <span className='text-white'>
           During the enriching experience of my internship in May 2022, I had the privilege to work with GLOBALOR PHILIPPINES, located in the scenic locale of Bohol, Philippines. In this role, I embraced a dual responsibility as both a Frontend Developer and a Quality Assurance Tester, harnessing my skills and expertise in ReactJS and Laravel to contribute to the team's success and growth.
           </span>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}> <span className='text-white' id="Inter"> Upwork Inc. / 2020 Freelancer </span></AccordionHeader>
          <AccordionBody>
           <span className='text-white' id="Inter">
           In June 2020, I worked as a Virtual Assistant Freelancer for UPWORK GLOBAL INC., where I conducted research, gathered data, and managed lead databases to support targeted customer segment identification and lead generation efforts.
           </span>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}> <span className='text-white' id="Inter"> JJS’s Data System / 2016 Freelancer </span></AccordionHeader>
          <AccordionBody>
            <span className='text-white' id="Inter">
              In the summer of 2016, I served as a Lead Generation Assistant at JJS DATA MINING in Bohol, Philippines, excelling in virtual assistant services with a focus on lead generation and social media, adeptly researching and identifying potential leads and meticulously maintaining lead databases and interactions.
            </span>
          </AccordionBody>
        </Accordion>
    </motion.div>
  )
}

export default MobileExperience
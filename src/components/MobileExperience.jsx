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
          <Typography variant="lead" id="Inter" className="lg:mt-0 lg:ml-[5rem] pl-[1rem] text-sm  text-white ">
                •  UX Planning and Designing, Prototyping, UI Design and Validation, UI / UX Evaluation, Gather User Feedback,  Message Content <br />
                • Created user-centered designs by understanding business requirements, and user feedback. <br />
                • Generated user flows, wireframes, prototypes and mockups and translated requirements into style 
                guides, design systems, design patterns and attractive user interfaces.<br />
                • Applied the knowledge of programming languages to code user-side applications, including visual 
                elements like menu bars, clickable buttons and the overall layout of websites or web applications.<br />
                • Design Implementation, UI Design and Evaluation, API Integration, Technical Recommendation, Code Documentation, Code Organization<br />
                • Handled the development and maintenance ofserver-side components and gained practical and  theoretical experience that can be applied to real-life scenarios. <br />
                • Contributed to tasks such as coding, troubleshooting, and collaborating with the front-end team.<br />
                • Developed Back-End Functionalities, Developed API, Managed Database and Server, Code and API Documentation<br />
                • Spearheaded the product quality, testing each part to ensure it meets company standards before moving to the next phase.<br />
                • Developed tools that will improve the testing process and provided improvement feedback to the Project Manager.<br />
                • Test Applications(Web & Mobile Application), Manual testing, Automation scripting, Issue tracking and bug reporting, Technical recommendation, Code organization, Code documentation
                </Typography>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}> <span className='text-white' id="Inter"> Upwork Inc. / 2020 Freelancer </span></AccordionHeader>
          <AccordionBody>
             <Typography variant="lead" id="Inter" className="ml-[1rem] text-sm text-white">
              • In June 2020, I worked as a Virtual Assistant  Freelancer for UPWORK GLOBAL INC., where I  conducted research, gathered data, and   managed lead databases to support  targeted customer segment identification  and lead generation efforts.
              </Typography>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}> <span className='text-white' id="Inter"> JJS’s Data System / 2016 Freelancer </span></AccordionHeader>
          <AccordionBody>
            <Typography variant="lead" id="Inter" className=" ml-[1rem] text-sm text-white">
               • In the summer of 2016, I served as a Lead  Generation Assistant at JJS DATA MINING in Bohol, Philippines, excelling in virtual assistant services with a focus on lead generation and social media, adeptly researching and identifying potential leads and meticulously maintaining lead databases and interactions.           
            </Typography>
          </AccordionBody>
        </Accordion>
    </motion.div>
  )
}

export default MobileExperience
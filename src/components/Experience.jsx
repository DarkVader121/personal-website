import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import {motion} from 'framer-motion'
import { MobileExperience} from '../components'
import {useState } from 'react'


const Experience = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
        <>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        className="lg:pt-[3rem] pt-3 hidden lg:block lg:px-[3rem]">
          <Typography
              variant="lead"
              id="Inter"
              className="font-bold  lg:text-2xl text-sm  text-center text-black "
          >
            My professional 
          </Typography>
          <Typography
              variant="h1"
              id="Inter"
              className="lg:text-9xl  lg:mt-0 mt-[1rem] text-center"
          >
              Work Experience
          </Typography>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <Typography variant="h1" id="Inter" className="lg:text-5xl text-lg text-black hover:text-gray-500 duration-300">
              <b> GlobalOR Inc. </b> / 2023 <br /> <div className="text-3xl">Intern</div>
              </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography variant="lead" id="Inter" className="lg:mt-0 lg:ml-[5rem] mt-[1rem] text-lg text-black ">
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
          <Accordion open={open === 2}>
             <AccordionHeader onClick={() => handleOpen(2)}>
                <Typography variant="h1" id="Inter" className="lg:text-5xl text-lg text-black hover:text-gray-500 duration-300">
                <b> Upwork Inc. </b> / 2020  <br /> <div className="text-3xl">Virtual Assistant Freelancer</div>
                </Typography>
             </AccordionHeader>
            <AccordionBody>
              <Typography variant="lead" id="Inter" className=" text-lg lg:ml-[5rem] text-black">
              • Conducted research and gathered data on specific customer segments for lead generation purposes 
              and utilized various sources and tools to collect information. <br />
              • Identified target customer profiles based on specified criteria and parameters as well as verified and 
              validated lead information to ensure accuracy and reliability. <br />
              • Managed, updated and organized lead databases to track progress and measure effectiveness, and 
              provided regular reports and updates to stakeholders. <br />

              </Typography>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
                <Typography variant="h1" id="Inter" className="lg:text-5xl text-lg text-black hover:text-gray-500 duration-300">
                <b>JJS’s Data System </b>/ 2016 -  <br /> <div className="text-3xl">Lead Generation Assistant</div>
                </Typography>
            </AccordionHeader>
            <AccordionBody>
            <Typography variant="lead" id="Inter" className=" pl-[5rem] text-lg text-black ">
            • Proficient in providing virtual assistant services,specializing in lead generation and social media. <br />
            • Experienced in researching and identifying potential leads within target markets.<br />
            • Strong attention to detail in maintaining accurate lead databases and tracking lead interactions.   <br />
            </Typography>
            </AccordionBody>
          </Accordion>
          </motion.div>
          <MobileExperience/>
        </>
  )
}

export default Experience
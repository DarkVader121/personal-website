import React from 'react'
import { Typography } from '@material-tailwind/react'
import { BackendDevelopment, FrontendDevelopment } from '../components'
import visual from '../public/visual.png'
import canva from '../public/canva.png'
import {motion} from 'framer-motion'

const ProgramStack = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    >
    <div className='lg:mt-10 lg:px-5 lg:py-5 lg:pt-15 mt-[1rem] px-[1rem] py-[1rem] bg-gray-500'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center lg:text-2xl text-sm  text-white"
        >
           Explore My 
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-9xl lg:mt-10 text-center"
        >
            Programming Stack
        </Typography>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 lg:justify-items-center lg:mt-5 mt-[1rem]'>
          <div>
          <FrontendDevelopment/>
              
          </div>
          <div>
            
            <BackendDevelopment/>
          </div>
        </div>
    </div>

    <div className='lg:mt-20 lg:pb-20 overflow-hidden'> 
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-6xl  text-center"
        >
            Essential Applications
        </Typography>
        <div className='grid lg:grid-cols-6 lg:mt-10 justify-items-center'>
          <div>
            <div className='grid grid-cols-4 mt-5 hover:scale-110 duration-300'>
                  <div className='flex items-center'>
                      <img src={visual} width={50} height={50} alt="" />
                  </div>
                  <div className='col-span-3 ml-3'>
                      <Typography
                          variant="h4"
                          id="Inter"
                          className=" "
                      >
                          Visual Studio
                      </Typography>
                      <Typography
                          variant="lead"
                          id="Inter"
                          className=""
                      >
                          Experienced
                      </Typography>
                  </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-4 mt-5 hover:scale-110 duration-300'>
                    <div className='flex items-center'>
                        <img src={canva} width={50} height={50} alt="" />
                    </div>
                    <div className='col-span-3 ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Canva
                        </Typography>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className=""
                        >
                            Experienced
                        </Typography>
                    </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-4 mt-5 hover:scale-110 duration-300'>
                  <div className='flex items-center'>
                      <li className='fa-brands fa-jira fa-2xl text-5xl '></li>
                  </div>
                  <div className='col-span-3 ml-3'>
                      <Typography
                          variant="h4"
                          id="Inter"
                          className=" "
                      >
                          Jira
                      </Typography>
                      <Typography
                          variant="lead"
                          id="Inter"
                          className=""
                      >
                          Intermediate
                      </Typography>
                  </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-4 mt-5 hover:scale-110 duration-300'>
                  <div className='flex items-center'>
                      <li className='fa-brands fa-figma fa-2xl text-5xl '></li>
                  </div>
                  <div className='col-span-3 ml-3'>
                      <Typography
                          variant="h4"
                          id="Inter"
                          className=" "
                      >
                          Figma
                      </Typography>
                      <Typography
                          variant="lead"
                          id="Inter"
                          className=""
                      >
                          Intermediate
                      </Typography>
                  </div>
            </div>
          </div>
                <div>
                   <div className='grid grid-cols-4 mt-5 hover:scale-110 duration-300'>
                     <div className='flex items-center'>
                      <li className='fa-brands fa-microsoft fa-2xl text-5xl '></li>
                      </div>
                        <div className='col-span-3 ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Microsoft 
                        </Typography>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className=""
                        >
                            Experienced
                        </Typography>
                        </div>
                    </div>
                  </div>
                  <div>
                   <div className='grid grid-cols-4 mt-5 hover:scale-110 duration-300'>
                     <div className='flex items-center'>
                     <i class="fa-brands fa-sourcetree text-5xl "></i>                      </div>
                        <div className='col-span-3 ml-3'>
                        <Typography
                            variant="h4"
                            id="Inter"
                            className=" "
                        >
                            Source Tree
                        </Typography>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className=""
                        >
                            Beginner
                        </Typography>
                        </div>
                    </div>
                  </div>
              <div>
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default ProgramStack
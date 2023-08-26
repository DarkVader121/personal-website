import React from 'react'
import { Typography } from '@material-tailwind/react'
import { BackendDevelopment, FrontendDevelopment } from '../components'
import visual from '../public/visual.png'
import canva from '../public/canva.png'

const ProgramStack = () => {
  return (
    <>
    <div className='mt-10 px-5 py-5 pt-15 bg-gray-500'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center text-white"
        >
           Explore My 
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="text-9xl mt-10 text-center"
        >
            Programming Stack
        </Typography>
        <div className='grid lg:grid-cols-2 justify-items-center mt-5'>
          <div className='flex items-center'>
              <FrontendDevelopment/>
          </div>
          <div>
            <BackendDevelopment/>
          </div>
        </div>
    </div>

    <div className='mt-20 pb-20'> 
        <Typography
            variant="h1"
            id="Inter"
            className="text-6xl  text-center"
        >
            Essential Applications
        </Typography>
        <div className='grid lg:grid-cols-6 mt-10 justify-items-center'>
          <div>
            <div className='grid grid-cols-4 mt-5'>
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
            <div className='grid grid-cols-4 mt-5'>
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
            <div className='grid grid-cols-4 mt-5'>
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
            <div className='grid grid-cols-4 mt-5'>
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
            <div className='grid grid-cols-4 mt-5'>
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
            <div className='grid grid-cols-4 mt-5'>
                    <div className='flex items-center'>
                        <img src="https://blog.testproject.io/wp-content/uploads/2020/03/cypress-1024x553.png" width={100} height={50} alt="" />
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
        </div>
    </div>
    </>
  )
}

export default ProgramStack
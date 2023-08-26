import { Typography } from '@material-tailwind/react'
import React from 'react'
import tailwind__2 from '../public/tailwind__2.png'
import material__ui from '../public/material__ui.png'
import {CustomButton} from '../components'

const LandingPage = () => {
  return (
    <>
    <div className='px-10 lg:py-20  '>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:font-extrabold lg:text-9xl md:5xl"
        >
            Imagination is more <br/> important than knowledge
        </Typography>
        <Typography
            variant="lead"
            id="Inter"
            className="mt-5"
        >
            - Albert Einstein 
        </Typography>
    </div>

    <footer className='bg-gray-500 '>
        <div className='pl-20 pt-5'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center'>
                <div className=' pl-20 pt-10'>
                        <Typography
                        variant="lead"
                        id="Inter"
                        className=" text-white"
                        >
                        I wanted to extend my warm regards to you.
                        </Typography>
                     <Typography
                        variant="h1"
                        id="Inter"
                        className="text-white lg:text-8xl "
                     >
                        Erron John
                     </Typography>
                    <CustomButton title="Contact Me!" btnSize="lg" btnVariant="gradient" containerStyles="mt-2" textStyles="Inter"/>
                </div>
                <div className='text-left'>
                    <Typography
                        variant="h1"
                        className="text-black lg:text-6xl text-left pt-20"
                    >
                       Frontend Developer 
                    </Typography>
                </div>
            </div>
         </div>
         <div className='px-10 py-10'>
            <Typography
                variant="lead"
                id="Inter"
                className="text-2xl font-bold"
            >
               Tech Stack
            </Typography>
            <div className='mt-5'>
                <div className='marquee flex gap-10'>
                    <span>
                       <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-react fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            React
                        </Typography>
                        </div>
                    </span>
                    <span>                       
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-laravel fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            Laravel
                        </Typography>
                        </div>
                    </span>
                    <span>                        
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-bootstrap fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            Bootstrap
                        </Typography>
                        </div>
                    </span>
                    <span>
                        <div className='flex items-center justify-center'>
                        <img 
                        src={tailwind__2} 
                        width={50}
                        height={50}
                        alt="tailwind icon" />
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            TailwindCSS
                        </Typography>
                        </div>
                    </span>
                    <span>
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-github fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            GitHub
                        </Typography>
                        </div>
                    </span>
                    <span>                      
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-html5 fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            HTML5 
                        </Typography>
                        </div>
                        </span>
                    <span>
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-css3 fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            CSS
                        </Typography>
                        </div>
                    </span>
                    <span>
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-js fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                            
                        >
                            Javascript
                        </Typography>
                        </div>
                    </span>
                    <span>
                        <div className='flex items-center justify-center'>
                        <img src={material__ui} width={40} height={40} alt="material UI" />
                        <Typography
                            variant="lead"
                            id="Inter"
                        >
                            MaterialTailwind
                        </Typography>
                        </div>
                    </span>
                    <span>
                        <div className='flex items-center justify-center'>
                        <i className='fa-brands fa-bitbucket fa-2xl'> </i>
                        <Typography
                            variant="lead"
                            id="Inter"
                            className="ml-3"
                        >
                            Bitbucket
                        </Typography>
                        </div>
                    </span>
                 </div>
            </div>
         </div>
    </footer>

    </>
  )
}

export default LandingPage
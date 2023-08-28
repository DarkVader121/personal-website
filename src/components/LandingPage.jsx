import { Typography } from '@material-tailwind/react'
import React, { useState, useEffect,useRef } from 'react'
import tailwind__2 from '../public/tailwind__2.png'
import material__ui from '../public/material__ui.png'
import { Link } from 'react-scroll'
import {CustomButton} from '../components'
import Resume from '../public/Resume.pdf'
import { motion } from 'framer-motion'
import Typed from 'typed.js';
import { SpeedDialNav } from '../components'

const LandingPage = () => {
  const el = useRef(null); 
  
  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Front-end Developer', 'Programmer', 'Software engineer', 'Code writer', 'Coding', 'Still Coding', 'Still Coding', 'Again, Still Coding'],
        typeSpeed: 150,
        backSpeed:150, 
        loop: true,
      });
  
    return () => {
        typed.destroy();
    }
  }, [])
  
  return (
    <>
    
    <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            opacity:1
        }}
        transition={{
            duration:3
        }}
        className='px-10 lg:py-20  '>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:font-extrabold lg:text-9xl md:5xl"
        >
            Coding is not about typing <br/> it's about thinking.
        </Typography>
        <Typography
            variant="lead"
            id="Inter"
            className="mt-5"
        >
            - Anonymous
        </Typography>
    </motion.div>

    <motion.footer
            initial={{
                opacity: 0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration:3
            }}
    className='bg-gray-500 '>
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
                     <div className='flex items-center gap-5 mt-5'>
                                            <motion.button
                                whileHover={{ scale:1.1}}
                                whileTap={{ scale: 0.9}}
                                >
                                <Link className='bg-black text-white p-4 rounded-lg font-bold hover:bg-gray-900 hover:text-gray duration-300' id="Inter" to="Contact" spy={true} smooth={true} duration={5000}>
                                <li className='fa-regular fa-handshake fa-lg  mr-3'></li>
                                    Lets Talk
                                </Link> 
                               
                                </motion.button>
                            <a href={Resume} download>
                            <CustomButton btnSize={`lg`} title={`Download Resume`} btnVariant={`outlined`} containerStyles={`hover:text-white hover:bg-black duration-300`}/>
                            </a>
                      </div>
                </div>
                <div className='text-left'>
                    <Typography
                        variant="h1"
                        className="text-black lg:text-6xl text-left pt-20"
                    >
                       <span ref={el}/>
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
                <div className='mt-10 marquee'>  
                    <div className='marquee__group'>
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
                    <div aria-hidden="true" className='marquee__group'>
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
                    <div aria-hidden="true" className='marquee__group'>
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
         
    </motion.footer>
    
    </>
  )
}

export default LandingPage
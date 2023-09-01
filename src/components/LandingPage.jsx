import { Typography, Button } from '@material-tailwind/react'
import React, { useEffect, useRef } from 'react'
import tailwind__2 from '../public/tailwind__2.png'
import material__ui from '../public/material__ui.png'
import { Link } from 'react-scroll'
import {CustomButton} from '../components'
import Resume from '../public/Coursera Certificate/Erron_John_resume.pdf'
import { motion } from 'framer-motion'
import Typed from 'typed.js';

const LandingPage = () => {
  const el = useRef(null); 
  
  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Front-end Developer', 'Programmer', 'Software Developer', 'Code writer', 'Coding...', 'Still coding...', 'Still coding...', 'Again, still coding...'],
        typeSpeed: 80,
        backSpeed: 200, 
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
            duration:2
        }}
        className='lg:px-[3rem] lg:py-20 px-[1rem] py-10 '>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:font-extrabold lg:text-9xl md:5xl"
        >
            Coding is not just about <br/> typing, it's about thinking.
        </Typography>
        
        <Typography
            variant="lead"
            id="Inter"
            className=""
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
    className='bg-gray-500'>
        <div className='lg:pl-[3rem] lg:pt-5'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center'>
                <div className=' lg:pt-10 pl-[1rem] pr-[1rem] pt-5'>
                        <Typography
                        id="Inter"
                        className=" text-white lg:text-2xl"
                        >
                        I wanted to extend my warm regards to you.
                        </Typography>
                     <Typography
                        variant="h1"
                        id="Inter"
                        className="text-white lg:text-8xl text-3xl "
                     >
                        Welcome to my Portfolio!
                     </Typography>
                     <div className='flex items-center lg:gap-5 gap-1 mt-5'>
                                {/* <Button  className='hover:text-white'>
                                <Link className=' text-gray-500 hover:text-white lg:p-4 p-3 rounded-lg  lg:font-bold bg-gray-900  duration-300 ' id="Inter" to="/Contact/" >
                                <li className='fa-regular fa-handshake lg:fa-lg mr-3  '></li>
                                    Let's talk!
                                </Link> 
                                </Button> */}
                            <Button size='md'> 
                                <Link  id="Inter" to="/Contact/" >
                                <li className='fa-regular fa-handshake lg:fa-lg lg:text-lg mr-3 '></li>
                                <span className='text-white duration-100 lg:text-lg text-base' id='Inter'>
                                    Let's talk!
                                </span>
                                </Link>
                            </Button>
                            <a href={Resume} download >
                            <CustomButton btnSize={`md`} title="Download Resume" btnVariant={`outlined`} containerStyles={`hover:text-white hover:bg-black duration-300 lg:text-md text-sm`} textStyles={`Inter`}/>
                            </a>
                      </div>
                </div>
                <div className='text-left'>
                    <Typography
                        variant="h1"
                        className="overflow-hidden text-black lg:text-6xl text-4xl text-left lg:pt-20 pt-[1rem] pl-[1rem]"
                    >
                       <span ref={el}/>
                    </Typography>
                </div>
            </div>
         </div>
         <div className='lg:px-[4rem] lg:py-10 pl-[1rem] pt-[2rem]'>
            <Typography
                variant="lead"
                id="Inter"
                className="text-2xl font-bold"
            >
               Tech Stack
            </Typography>
                <div className='lg:mt-1 mt-5 marquee'>  
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
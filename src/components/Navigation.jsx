import { Collapse, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-scroll'
import Logo from '../public/Logo.png'
import {motion} from 'framer-motion'


const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)

  const NavList = (
    <motion.nav 
    initial={{
        x:'-100vw', 
        opacity: 0, 
    }}
    animate={{
        x:0, 
        opacity: 1, 
    }}
    transition={{ duration:2}}
    >
    <ul className='mb-4 mt-4 md:inline-block lg:flex  lg:mb-0 lg:mt-0  lg:items-center lg:gap-6 overflow-hidden'>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg  hover:scale-105 duration-300 hover:bg-black hover:text-white hover:font-bold  "
      >
        <button>
         <Link onClick={() => {setOpenNav(!openNav)}} to="About" spy={true} smooth={true}  duration={3000}>
          About
         </Link> 
         </button>
      </Typography>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg  hover:scale-105 duration-300 hover:bg-black hover:text-white hover:font-bold  "
      >
        <button>
        <Link onClick={() => {setOpenNav(!openNav)}} to="Projects" spy={true} smooth={true} duration={3000}>
          Projects
        </Link>
        </button>
      </Typography>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg  hover:scale-105 duration-300 hover:bg-black hover:text-white hover:font-bold  "
      >
        <button>
        <Link onClick={() => {setOpenNav(!openNav)}} to="Certificate" spy={true} smooth={true} duration={3000}>
          Certificates
        </Link>
        </button>
      </Typography>
      <Typography
        
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg hover:scale-105 duration-300 hover:bg-black hover:text-white hover:font-bold  "
      >
        <button>
        <Link onClick={() => {setOpenNav(!openNav)}} to="Program" spy={true} smooth={true} duration={3000}>
          Program Stack
        </Link>
       </button>

      </Typography>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg hover:scale-105 duration-300 hover:bg-black hover:text-white hover:font-bold  "
      >
         <button>
        <Link onClick={() => {setOpenNav(!openNav)}} to="Experience" spy={true} smooth={true} duration={3000}>
          Experience
        </Link>
        </button>
      </Typography>
      <Typography
        
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg hover:scale-105 duration-300 hover:bg-black hover:text-white hover:font-bold  "
      >
         <button>
        <Link onClick={() => {setOpenNav(!openNav)}} to="Videos"  smooth={true} duration={4000}>
          Videos
        </Link>
        </button>
      </Typography>
    </ul>
    </motion.nav>
  )
  return (
    <div className='max-w-screen lg:px-5 lg:py-2 bg-blue-gray-1'>
      <div className='md:pl-[2rem] flex items-center justify-between '>
        <motion.button
          whileHover={{ scale:1.1}}
          whileTap={{ scale: 0.9}}
        >
          <img src={Logo} width={200} height={100} alt="Logo" />
        </motion.button>
        <div className='hidden lg:block'>{NavList}</div>
        <IconButton
          variant="text"
          className='mr-5 h-6 w-6 text-inherit hover:bg-transparent  active:bg-transparent lg:hidden '
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
       >
        {openNav ? (
             <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             className="h-6 w-6"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M6 18L18 6M6 6l12 12"
             />
           </svg>
        ) : (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
        </IconButton>
      </div>
        <Collapse open={openNav}>
          <div className=' lg:hidden '>
            {NavList}
          </div>
        </Collapse>
    </div>
   
  )
}

export default Navigation
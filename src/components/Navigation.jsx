import { Collapse, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-scroll'
import Logo from '../public/Logo.png'


const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)

  const NavList = (
    <nav>
    <ul className='mb-4 mt-4 md:inline-block lg:flex  lg:mb-0 lg:mt-0  lg:items-center lg:gap-6'>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg  hover:scale-150 duration-300 "
      >
         <Link to="About" spy={true} smooth={true}  duration={2000}>
          About
         </Link> 
      </Typography>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg  hover:scale-150 duration-300 "
      >
        <Link to="Projects" spy={true} smooth={true} duration={2000}>
          Projects
        </Link>
      </Typography>
      <Typography
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg  hover:scale-150 duration-300 "
      >
        <Link to="Certificate" spy={true} smooth={true} duration={2000}>
          Certificates
        </Link>
      </Typography>
      <Typography
        
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg hover:scale-150 duration-300 "
      >
        <Link to="Program" spy={true} smooth={true} duration={2000}>
          Program Stack
        </Link>
      </Typography>
      <Typography
       
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg hover:scale-150 duration-300 "
      >
        <Link to="Experience" spy={true} smooth={true} duration={2000}>
          Experience
        </Link>
      </Typography>
      <Typography
        
        variant="paragraph"
        id="Inter"
        className="px-10 py-2 drop-shadow-md text-lg hover:scale-150 duration-300 "
      >
        <Link to="Videos" spy={true} smooth={true} duration={2000}>
          Videos
        </Link>
      </Typography>
    </ul>
    </nav>
  )
  return (
    <div className=' max-w-screen lg:px-5 lg:py-2 bg-blue-gray-1'>
      <div className='mx-auto flex items-center justify-between '>
        <button>
          <img src={Logo} width={200} height={100} alt="Logo" />
        </button>
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
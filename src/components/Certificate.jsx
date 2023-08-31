import React from 'react'
import{ useState } from 'react'
import {motion }  from 'framer-motion'
import { Typography } from '@material-tailwind/react'
import Frontend_Certificate from '../public/Coursera Certificate/Frontend_Certificate.png';
import Advance_react from '../public/Coursera Certificate/Advance_react.png';
import Basic from '../public/Coursera Certificate/Basic.png';
import Capstone from '../public/Coursera Certificate/Capstone.png';
import In_depth from '../public/Coursera Certificate/In_depth.png';
import Javascript from '../public/Coursera Certificate/Javascript.png';
import UX_UI from '../public/Coursera Certificate/UX_UI.png';
import Interview from '../public/Coursera Certificate/Interview.png'
import Introduction from '../public/Coursera Certificate/Introduction.png'
import Version from '../public/Coursera Certificate/Version.png'
import React_native from '../public/Coursera Certificate/React_native.png'
import Introduction_mobile from '../public/Coursera Certificate/Introduction_mobile.png'
import CustomButton from './CustomButton';
import CertificateModal from './CertificateModal';
import Certificates from "../public/Coursera Certificate/Meta Certificates.pdf"


const Certificate = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open);
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='lg:px-[3rem] mt-[1rem]'
    >
           <CertificateModal 
            open={open}
            handleOpen={handleOpen}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
    <div className='lg:px-5 lg:pt-10 px-[1rem]'>
    <Typography
        variant="lead"
        id="Inter"
        className="lg:text-2xl text-sm font-bold text-center"
    >
        Achievement earned
    </Typography>
    <Typography
      variant="h1"
      id="Inter"
      className="font-bold text-center lg:text-9xl"
    >
      Certificates
    </Typography>
    <a href={Certificates} download>
    <CustomButton
      title={`Download All`}
      textStyles={`Inter`}
      btnVariant={`gradient`}
      btnSize={`lg`}
      containerStyles={`lg:mt-3 lg:mb-3`}
    />
    </a>
    <div className='grid lg:grid-cols-3 grid-cols-2 justify-items-center gap-5'>
        <div className='hover:scale-105 duration-500 mt-[1rem]  ' onClick={() => {setSelectedId("Frontend_Certificate") 
                            setOpen(true);}}>
            <img src={Frontend_Certificate} className='w-full' alt="" />
        </div>
        <div className='hover:scale-105 duration-500 mt-[1rem]' onClick={() => {setSelectedId("Advance_react") 
                            setOpen(true);}}>
          <img src={Advance_react} className='w-full' />
        </div>
        <div className='hover:scale-105 duration-500 lg:mt-[1rem]' onClick={() => {setSelectedId("Basic") 
                            setOpen(true);}}>
          <img src={Basic} className='w-full' />
        </div>


      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("In_depth") 
                           setOpen(true);}}>
        <img src={In_depth} className='w-full' />
      </div>
      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("Javascript") 
                           setOpen(true);}}>
        <img src={Javascript} className='w-full' />
      </div>
      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("Introduction") 
                           setOpen(true);}}>
          <img src={Introduction} className='w-full' alt="" />
      </div>

      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("Interview") 
                           setOpen(true);}}>
        <img src={Interview} className='w-full' />
      </div>
      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("Version") 
                           setOpen(true);}}>
          <img src={Version} className='w-full' alt="" />
      </div>
      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("React_native") 
                           setOpen(true);}}>
          <img src={React_native} className='w-full' alt="" />
      </div>


       <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("UX_UI") 
                           setOpen(true);}}>
        <img src={UX_UI} className='w-full' />
      </div>

      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("Introduction_mobile") 
                           setOpen(true);}}>
          <img src={Introduction_mobile} className='w-full' alt="" />
      </div>

      <div className='hover:scale-105 duration-500' onClick={() => {setSelectedId("Capstone") 
                            setOpen(true);}}>
         <img src={Capstone} className='w-full' alt="" />
      </div>
    
    </div>
</div>
</motion.div>
  )
}

export default Certificate
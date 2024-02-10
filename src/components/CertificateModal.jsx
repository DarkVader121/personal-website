import React from 'react'
import {Dialog} from '@material-tailwind/react'
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
const CertificateModal = ({open, handleOpen, selectedId}) => {
    
    let path; 
    
    if (selectedId == "Frontend_Certificate" ) {
       path = Frontend_Certificate; 
    } else if ( selectedId == "Advance_react") {
        path = Advance_react;
    } else if ( selectedId == "Basic") {
        path = Basic;
    }else if ( selectedId == "Capstone") {
        path = Capstone;
    }else if ( selectedId == "In_depth") {
        path = In_depth;
    } else if ( selectedId == "Javascript") {
        path = Javascript;
    } else if ( selectedId == "UX_UI") {
        path = UX_UI;
    } else if ( selectedId == "Interview") {
        path = Interview;
    } else if ( selectedId == "Introduction") {
        path = Introduction;
    } else if ( selectedId == "Version") {
        path = Version;
    } else if ( selectedId == "React_native") {
        path = React_native;
    } else if ( selectedId == "Introduction_mobile") {
        path = Introduction_mobile;
    } 
  return (
   <Dialog open={open} handler={handleOpen} size={'lg'} >
    {selectedId && (
        <div layoutid={selectedId}>
            {
            <img src={path} className='w-full' alt="" />
            }
        </div>
    )}
    </Dialog>
  )
}

export default CertificateModal
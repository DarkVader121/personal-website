
import { Collapse, Typography} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-scroll";
const SpeedDialNav = () => {
  const [openDial, setOpenDial] = useState(false)



  const DialNavList = ( 
    <>
        <div className="flex flex-col items-end mb-4 gap-1 bg-gray-100 rounded-lg bg-opacity-50 ">
        <button>
            <Typography
              variant="lead"
              id="Inter"
              className="text-lg font-bold  hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/LandPage/"  onClick={()=>{setOpenDial(!openDial)}} >
              Home
            </Link>
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className="text-lg font-bold  hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/About/" onClick={()=>{setOpenDial(!openDial)}}  >
              About
            </Link>
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className="text-lg font-bold  hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/Projects/" onClick={()=>{setOpenDial(!openDial)}}  >
              Projects
            </Link>
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className="text-lg font-bold  hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/Certificate/" onClick={()=>{setOpenDial(!openDial)}}  >
              Certificates
            </Link>
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className=" text-lg font-bold hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/Program/" onClick={()=>{setOpenDial(!openDial)}}  >
              Program Stack
            </Link>
          
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className=" text-lg font-bold hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/Experience/" onClick={()=>{setOpenDial(!openDial)}}  >
             Experience
            </Link>
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className=" text-lg font-bold hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/Videos/" onClick={()=>{setOpenDial(!openDial)}}  >
             Videos
            </Link>
            </Typography>
          </button>
          <button >
            <Typography
              variant="lead"
              id="Inter"
              className=" text-lg font-bold hover:bg-black hover:text-white hover:font-bold duration-300 p-2 rounded-lg"
            >
            <Link to="/Contact/"  onClick={()=>{setOpenDial(!openDial)}} >
             Let's Talk
            </Link>
            </Typography>
          </button>
        
   </div>
    </>
  )

  return (
  <div className=" fixed right-6 bottom-6 group ">
      <Collapse open={openDial}>
      {DialNavList}
      </Collapse>
      <div className="flex justify-end">
      <button className="rounded-full px-5 py-4 bg-black" onClick={() => setOpenDial(!openDial)}>
         <i className="fa-solid fa-bars fa-lg" style={{color:"white"}}></i>
          <span className="sr-only">Open actions menu</span>
      </button>
      </div>
  </div>
  )
}

export default SpeedDialNav
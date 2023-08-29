import React from 'react'
import { Typography } from '@material-tailwind/react'
import { Youtube_links } from '../constants'
import { YoutubeFrame } from '../components'
import {motion} from 'framer-motion'

const Videos = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='lg:p-5 p-[1rem]'>
        <Typography
            variant="lead"
            id="Inter"
            className="lg:text-2xl text-sm font-bold text-center"
        >
           Watch My 
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-9xl lg:mt-10 text-center"
        >
            Videos
        </Typography>

      {Youtube_links.map((youtube_data) => (
        <div key={youtube_data.link} value={youtube_data.title}>
          <YoutubeFrame
            youtube_data={youtube_data}
          />
        </div>
      ))}
    </motion.div>
  )
}

export default Videos
import React from 'react'
import { Typography } from '@material-tailwind/react'
import { Youtube_links } from '../constants'
import { YoutubeFrame } from '../components'

const Videos = () => {
  return (
    <div className='lg:p-5'>
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center"
        >
           Watch My 
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="text-9xl mt-10 text-center"
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
      
      
            {/* {Hoobies.map((Hooby) => (
                <div key={Hooby} value={Hooby}>
                    <Typography
                        variant="paragraph"
                        id="Inter"
                        className=""
                    >
                    {Hooby}
                    </Typography>
                </div>
            ))
            } */}
    </div>
  )
}

export default Videos
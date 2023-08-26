import React from 'react'
import { Typography } from '@material-tailwind/react';
const YoutubeFrame = ({youtube_data}) => {
    const videoId = youtube_data.link.split('v=')[1].split('&')[0];
    return (
        <div className='grid lg:grid-cols-9'>
            <div className='col-span-7 mt-[5rem] flex justify-center'>
                <iframe width="1000" height="400" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
            </div>
            <div className='col-span-2 flex justify-start mt-[5rem] '>
                 <Typography
                    variant='h2'
                    id="Inter"
                >
                    {youtube_data.title}
                </Typography>
            </div>
        </div>
    )
}

export default YoutubeFrame
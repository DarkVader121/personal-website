import React from 'react'
import CountUp from 'react-countup'

const Loader = () => {
  return (
    <>
    <div className='body'>
        <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
        <div className='base'>
            <span>

            </span>
            <div className='face'></div>
        </div>
    </div>
    <div className='longfazers'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div id='loader__text'>
      <CountUp
        start={0}
        end={100}
        duration={4}
      /> %
    </div>
    </>
  )
}

export default Loader
import React, { useEffect, useState } from 'react'

const Timer = (props) => {
const {startCounting ,correctwords} = props
const [timeElapsed, setTimeElapsed ]= useState(0);

  useEffect(()=>{
    if(startCounting){
        setInterval(()=>{
            setTimeElapsed(oldTime => oldTime +1)
        },1000)
    }
  }, [startCounting])
  const minutes = timeElapsed/60;
  console.log(minutes)
  
  return (
    <div>
        <p>Time: {timeElapsed}</p>
        <p>Speed: {(correctwords/minutes) || 0 } WPH </p>
        
    </div>
  )
}

export default Timer
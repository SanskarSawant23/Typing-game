import React, { useEffect, useState } from 'react'

const Timer = (props) => {
const {startCounting ,correctwords} = props
const [timeElapsed, setTimeElapsed ]= useState(0);
console.log("timer", startCounting)



  useEffect(()=>{
    let interval;
    if(startCounting){
       interval =   setInterval(()=>{
        setTimeElapsed(oldTime => oldTime +1)
        },1000)
    }
    return()=>{
        clearInterval(interval)
    }

  }, [startCounting])

  const minutes = timeElapsed/60;
  
  
  return (
    <div>
        <p>Time: {timeElapsed}</p>
        <p>Speed: {(correctwords/minutes) || 0  } WPH </p>
        
    </div>
  )
}

export default Timer
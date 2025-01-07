import React, { useEffect, useRef  ,memo} from 'react'

 const Word  = (props) => {
  const rerender = useRef(0);

  useEffect(()=>{
      rerender.current += 1
  })
  
  const {text, activeword, correct} = props
  console.log(activeword)
  //text is one of the element in the array.
  if(correct === true){
    return <span className="correct">{text}  </span>
  }
  if(correct === false){
    console.log("false")
    return <span className='wrong'>{text}  </span>
  }

  if(activeword){
    console.log("inside active word")
    return <span className='active'>{text} </span>
  }
 
  return <span>{text} </span>
}

export default memo(Word)
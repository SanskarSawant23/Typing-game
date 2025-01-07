import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom';
import  Word from './Word';
import Timer from './Timer';
export const Type = () => {

const getWord = () => `Serenity tranquility harmony resilience serendipity luminous azure enchantment idyllic meander 
crystalline symmetry radiance ethereal flourish whisper vibrant symphony glisten embrace.`.split(' ')
                


  const word = useRef(getWord()); //created once presists across renders.
  const[inputvalue, setInputvalue] = useState('');
  const[activewordIndex, setActivewordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);// initially empty
  const [count, setCount] = useState(false);
  const [button, setButton] = useState(false);

  

  const onChange =(value)=>{
   if(activewordIndex === word.current.length){
      return
   }
     if(!count){
        setCount(true);
     }
     
     if(value.endsWith(' ')){

      if(activewordIndex === word.current.length-1){
         setCount(false)
         setInputvalue("Game Completed")
         setButton(true);
         
     }else{
         setInputvalue('');
     }

        setActivewordIndex(index => index+1); //the varialbe used can be of anyname, since the value that manupulates is same only.
        

        const typedword = value.trim()// removes the white spaces from the string.
        
            setCorrectWordArray(data => {
               const newResult = [...data]
               newResult[activewordIndex] = typedword === word.current[activewordIndex]

               return newResult
            })
        

     }else{
        setInputvalue(value);
     }
  }
  const onclickhandler = ()=> {
         console.log("inside button")
         setInputvalue('');
         setCount(true)

  }
  return(
    <>
    <div>
    <h1>Typing Test</h1>
     <Timer startCounting = {count}
            correctwords = {correctWordArray.filter(Boolean).length}
     />
      <p>{word.current.map((word, index)=>{
        
            return <Word 
               text = {word}
               activeword = {index === activewordIndex}
               correct = {correctWordArray[index]} //stores the result. is the value of this whole is not set then it becomes undefined. this array stores the boolean values.
               
            />
       })}</p>
    <input type="text"
    
    value={inputvalue}
    onChange={((e)=>onChange(e.target.value))}
    />
   {button?<button onClick={onclickhandler}>Reset</button>: <span></span>}

    </div>
      
    </>
  )
}

import React,{useState,useEffect} from 'react'
function Counter() {

   const [count,setCount] = useState(100)
   const [showButton,setShowButton] = useState(true)
   function increment(){
      setCount(c=> c+5)
   }
   function decrement(){
         setCount(c=> c-3)
   }

   useEffect(()=>{
      if(count<100){
         setShowButton(false)
         alert('count is below 100')
      }else{
         setShowButton(true)
      }
   },[count])

  return (
    <div>
      <p>{count}</p>
      <button  onClick={increment}>+</button>
      {showButton ? <button onClick={decrement}>-</button>: null}
    </div>
  )
}

export default Counter
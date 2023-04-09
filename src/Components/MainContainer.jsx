import React from 'react'
import Input from './InputContainer'
import TodoContainer from './TodoContainer'



const Container = () => {
  return (
    <div style={
        {height:"78%",
        width:"100%",
         display:"flex", 
         flexDirection:"column",
         alignItems:"center",
         padding:"10px" ,
         }
         }>
        <Input/>
        <TodoContainer/>
    </div>
  )
}

export default Container
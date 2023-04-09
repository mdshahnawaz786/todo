import './input.css'
import React, { useContext, useState } from 'react'
import { myContext } from '../context'



const Input = () => {
    const {list,setList} = useContext(myContext)
    const [inputData,setInputData] = useState("")

    function LocalStorageUsageFn(list){
        localStorage.setItem("todoData",JSON.stringify(list));
    }

  return (
    <div  className='inputMain'>
        <div className='inputDiv'>
            <input type="text" placeholder='type here' onChange={((e)=>{
                setInputData(e.target.value)
            })} />
            <button onClick={(()=>{
                if(inputData === ""){
                    alert("Enter Todo....");
                    return
                }
                setList([...list,{todo:inputData,id:Date.now(),booleanValue:false,checked:false}])
                LocalStorageUsageFn(list)
            })}>+</button>
        </div>
    </div>
  )
}

export default Input
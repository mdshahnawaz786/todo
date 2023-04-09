import React, { useContext, useState } from 'react'
import { myContext } from '../context'
import './todocont.css'


const TodoContainer = () => {

    const { list, setList,inputValue, setinputValue} = useContext(myContext)
    const [checked , setChecked] = useState(false)
    const [state, setstate] = useState(false)


    function deleteFn(id, list) {
        setList(
          list.filter((ele) => {
            return ele.id !== id;
          })
        );
      }

  return (
    <div className='todoContainer'>
        {list.length > 0 ? list.map((ele) => {
        return (
          <div className="lists">
            <input onChange={(e) => {
                if(e.target.checked){
                    ele.checked = true
                setChecked(e.target.checked)
                }else{
                    ele.checked = false
                    setChecked(e.target.checked)
                }
            }} type="checkbox" />

            {ele.booleanValue ? (
              <input className="inputContainer2"
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setinputValue(e.target.value); 
                }}
              />
            ) : (
              <p className={ele.checked === true ? "checkedClass" : "pTag"} >{ele.todo}</p>
            )}

            <div className="iconContainer">

              <i style={{color:"green"}}
                onClick={() => {
                  ele.booleanValue = !state;
                  setinputValue(ele.todo);
                  ele.todo = inputValue;
                  setstate(!state);
                }}
                className="fa-solid fa-pen-to-square"
              ></i>

              <i style={{color:"red"}}
                onClick={() => {
                  deleteFn(ele.id, list);
                }}
                className="fa-solid fa-trash"
              ></i>

            </div>
          </div>
        );
      }) :null}
    </div>
  )
}

export default TodoContainer
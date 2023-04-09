import { createContext, useState } from "react";


export const myContext = createContext();



function CustomProvider({children}){

        const [list, setList] = useState([]);
        const [boolean,setBoolean] = useState(false);
        const [inputValue, setinputValue] = useState("");


    return (
        <myContext.Provider  value={{list,setList,boolean,setBoolean,inputValue, setinputValue}}>
            {children}
        </myContext.Provider>
    );
}

export default CustomProvider;
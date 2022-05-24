import React, { useState, useEffect } from 'react';


export const EditEntry = ({index, todoValue, setTodoValue})=> {

    
    
    const handlEdit = () => { 
        
        let newValue = prompt("Ingresa el texto a modificar")

        const editValue = (newValue, key) => { 
            
            let auxArr = [...todoValue]

            auxArr[key] = newValue

            setTodoValue(auxArr)
         }

         editValue(newValue, index)

    }
    
    

    return (
        
        <div>

            <button onClick={()=>handlEdit()}>Edit</button>

        </div>

    )
}

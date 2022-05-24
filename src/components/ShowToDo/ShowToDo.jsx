import React, { useState, useEffect } from 'react';
import { DeleteButton } from '../DeteleEntry/DeleteButton';
import { EditEntry } from '../EditEntry/EditEntry';
import './showtodo.css'



export const ShowToDo = ({ todoValue, setTodoValue }) => {




    return (

        <div className='container'>

            <ul>
                
                {
                    todoValue.map( (element, index) => {
                        return (

                            <li key={index}>
                            <p>{element}</p>
                            <div className='opt-buttons'>
                                <EditEntry
                                index={index} 
                                todoValue={todoValue} 
                                setTodoValue={setTodoValue}
                                />
                                <DeleteButton 
                                index={index} 
                                todoValue={todoValue} 
                                setTodoValue={setTodoValue}
                                /> 
                            </div>
                            </li> 
                        ) 
                    })
                }
               
            </ul>

        </div>
        
    )
}

import React, { useState } from 'react'


export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setinputValue] = useState('Fairy tail');

    const onInputChange = ({target})=>{
        setinputValue(target.value);
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        if(inputValue.trim().length<1) return;
        onAddCategory(inputValue);
        setinputValue('');
    }

    return (

    <form onSubmit={(event)=>onSubmit(event)}>
        <input type="text"
           placeholder="Search Category"
           value={inputValue}
           onChange={onInputChange}
     />
    </form>
    
  )
}

import React, { useState } from 'react'
import "./taskcard_style/TaskCard.css"

function TaskCardTitle() {
    const [isClick, setIsClick] = useState(false);
    const [inputTitle, setInputTitle] = useState("Today")
    const handleClick = () => {
        setIsClick(true);
    };
    const handleChange = (e) => { 
        setInputTitle(e.target.value);
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        setIsClick(false)
    };
    const handleBlur = () => {
        setIsClick(false);
    };

    

    return (
    <div onClick={handleClick} className="inputTitleArea">
        {isClick ? 
        <form onSubmit={handleSubmit}>
            <input 
            className='inputTitle' 
            autoFocus
            type="text" 
            onChange={handleChange}
            onBlur= {handleBlur} 
            value={inputTitle} 
            maxLength= "10"/></form>
             : <h3>{inputTitle}</h3>}
    </div>
  )
}

export default TaskCardTitle
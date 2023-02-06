import React from 'react'
import "../taskcard_style/TaskCard.css"
import { v4 as uuid } from 'uuid';

function TaskAddInput({
    inputText,
    setInputText,
    setTaskList,
    taskList,}) {
    const handleSubmit = (e) => {
        const taskId = uuid();
        e.preventDefault();
        if (inputText === "") {
            return;
        }
        //カードを追加する
        setTaskList([
            ...taskList,
            {
                id: taskId,
                text: inputText,
                draggableId: `task-${taskId}`
            },
        ]); 
        setInputText("")
    };
    const handleChange = (e) => {
        setInputText(e.target.value)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='add a task' 
            className='taskAddInput'
            onChange={handleChange}
            value={inputText} />
        </form>
    </div>
  )
}

export default TaskAddInput
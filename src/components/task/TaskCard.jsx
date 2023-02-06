import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import "./taskcard_style/TaskCard.css"
import Tasks from './Tasks'

function TaskCard({ taskCardsList, setTaskCardsList, taskCard, index }){
  const[taskList, setTaskList] = useState([]);
  const[inputText, setInputText] = useState("");


  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className='taskCard'  
        ref={provided.innerRef}
        {...provided.draggableProps}        
        >
        <div className='taskCardTitle_TaskCardDeleteButtonArea'
        {...provided.dragHandleProps}
        >
        <TaskCardTitle />
        <TaskCardDeleteButton 
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
        taskCard={taskCard} 
        />
        </div>
        <TaskAddInput 
        inputText={inputText} 
        setInputText={setInputText} 
        taskList={taskList} 
        setTaskList={setTaskList} />
        <Tasks  inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
        </div>
      )}
      </Draggable>
  )
}

export default TaskCard
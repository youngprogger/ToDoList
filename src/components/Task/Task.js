import React from 'react'

const Task = ({ id, name, description, completed, onClick }) => {  
  return (
      <div id={id}>
          <h4 className="task">{name}</h4>
          <p className="task">{description}</p>
          <p className="task">{completed.toString()}</p>
          <button className="button1" onClick={() => onClick(id)}>{!completed ? 'Done' : 'Undone'}</button>
      </div>
    )
  }

export default Task
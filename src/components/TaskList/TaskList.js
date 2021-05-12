import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasksArr, onClick}) => {
    return (
        tasksArr.map( (task) => {
            return (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    completed={task.completed}
                    onClick={onClick}
                />
            )
        })
    )
}

export default TaskList
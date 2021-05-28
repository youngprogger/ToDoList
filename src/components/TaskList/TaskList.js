import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasksArr, onClick}) => {
    var tasks = []
    for (var i in tasksArr){
        tasks.push(tasksArr[i])
    }
    return ( 
        tasks.map( (task) => {
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
export const ADD_TASK = 'ADD_TASK' 
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS' 

export const handleTaskAdd = (taskId, taskName, taskDescription) => ({
    type: ADD_TASK,
    taskId: taskId,
    taskName: taskName,
    taskDescription: taskDescription
})

export const handleTaskStatusChange = (id, completed) => ({
    type: CHANGE_TASK_STATUS,
    id: id,
    completed: completed
})
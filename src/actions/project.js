export const ADD_PROJECT = 'ADD_PROJECT'

export const handleProjectAdd = (id, name) => ({
    type: ADD_PROJECT,
    id: id,
    name: name,
    tasksIds: []
})

export const PROJECT_ADD = 'PROJECT_ADD'

export const handleProjectAdd = (id, name) => ({
    type: PROJECT_ADD,
    id: id,
    name: name,
    tasksIds: []
})

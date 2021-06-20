export default function normalizeState(state) {
    console.log('state', state);
    const normalizedState = {
        projects: [],
        tasks: []
    }

    Object.values(state).map( (project) => {
        const tasksIds = Object.values(project.tasks).map(task => task.id)
        Object.values(project.tasks).map( (task) => {
            return normalizedState.tasks[--task.id] = {
                id: task.id,
                name: task.name,
                description: task.description,
                completed: task.completed
            }
        })
        return (
            normalizedState.projects.push({
                id: project.id,
                name: project.name,
                tasksIds
            })
        )
    })


    return normalizedState 
}

import React from 'react'
import Project from '../Project/Project'

const ProjectList = ({projectsArr}) => {
    var tasks = []
    for (var i in projectsArr){
        tasks.push(projectsArr[i])
    }
    return ( 
        tasks.map( (task) => {
            return (
                <Project
                    key={task.id}
                    id={task.id}
                    name={task.name}
                />
            )
        })
    )
}

export default ProjectList
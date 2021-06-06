import { ADD_TASK, CHANGE_TASK_STATUS } from '../actions/task'
var projectsById;
var tasksById;
try {projectsById = returnProjectState()}
catch {projectsById = null}
try {tasksById = returnTaskState()}
catch{tasksById = null}

const initialState = {
  projects: projectsById,
  tasks: tasksById
}


function returnProjectState(){
    return JSON.parse(localStorage.getItem('projectsById'));  
  }
function returnTaskState(){
    return JSON.parse(localStorage.getItem('tasksById'))
  }


export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK: {
        const {projectId, taskId, taskName, taskDescription} = action
        
        const ProjectList = {...state.projects}
        ProjectList[projectId].tasksIds.push(taskId)
        const TaskList = {...state.tasks}
        TaskList[taskId] = {
          id: taskId,
          name: taskName,
          descriptiom: taskDescription,
          completed: false
        }
        return { 
          ...state, 
          projects: ProjectList,
          tasks: TaskList
        }
      }
      case CHANGE_TASK_STATUS: {
          var tmpTask = action.id
          var TaskList = {...state.tasks}
          TaskList[tmpTask].completed = !action.status
          return {
              ...state,
              tasks: TaskList
          }
      }
      default:
        return state;
    }
  };

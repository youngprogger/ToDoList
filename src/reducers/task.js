import { ADD_TASK, CHANGE_TASK_STATUS } from '../actions/task'
import state from '../data/state'
import normalize from '../data/normalizer'

const {projects, tasks} = normalize(state)

const initialState = {
  projects,
  tasks
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

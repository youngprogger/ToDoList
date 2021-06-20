import { ADD_TASK, CHANGE_TASK_STATUS } from '../actions/task'
import state from '../data/state'
import normalize from '../data/normalizer'

const {tasks} = normalize(state)

const initialState = {
  tasks
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      // case ADD_TASK: {
      //   const {projectId, taskId, taskName, taskDescription} = action
      //   const ProjectList = {...state.projects}
      //   ProjectList[projectId].tasksIds.push(taskId)
      //   const TaskList = {...state.tasks}
      //   TaskList[taskId] = {
      //     id: taskId,
      //     name: taskName,
      //     descriptiom: taskDescription,
      //     completed: false
      //   }
      //   return { 
      //     ...state, 
      //     projects: ProjectList,
      //     tasks: TaskList
      //   }
      // }
      case CHANGE_TASK_STATUS: {
          var currentTaskId = action.id
          var completedStatus = action.completed
          var updatedTasksList = {...state.tasks}
          updatedTasksList[currentTaskId].completed = !completedStatus
          return {
            ...state,
            tasks: updatedTasksList
          }
      }
      default:
        return state;
    }
  };

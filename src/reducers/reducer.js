import { combineReducers } from "redux"
import { taskReducer } from './task'
import { projectReducer } from './project'

export const rootReducer = combineReducers({
    tasksByIds: taskReducer,
    projectsByIds: projectReducer
})
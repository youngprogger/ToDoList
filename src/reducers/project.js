import { PROJECT_ADD } from '../actions/project'
import state from '../data/state'
import normalize from '../data/normalizer'

const {projects} = normalize(state)
const initialState = {
  projects
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ADD: {
      const newProjId = action.id
      const newProjectsList = {...state.projects}
      newProjectsList[newProjId] = {
          id: action.id,
          name: action.name,
          tasksIds: []
      }
      
      return {
        ...state,
        projects: newProjectsList
      }
    }
    default:
      return state;
  }
};

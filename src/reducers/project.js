import { ADD_PROJECT } from '../actions/project'
var projectsById;
try {projectsById = returnProjectState()}
catch {projectsById = null}

const initialState = {
  projects: projectsById,
}


function returnProjectState(){
    return JSON.parse(localStorage.getItem('projectsById'));  
  }

export const projectReducer = (state = initialState, action) => {
        switch (action.type) {
          case ADD_PROJECT: {
            console.log("add_start")
            const Id = action.id
            const ProjectList = {...state.projects}
            ProjectList[Id] = {
                id: action.id,
                name: action.name,
                description: action.description,
                tasksIds: []
            }
            return {
              ...state,
              projects: ProjectList
            }
          }
          default:
            return state;
        }
      };
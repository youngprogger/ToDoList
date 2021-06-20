import React from 'react'
import {connect} from 'react-redux'
import {handleProjectAdd} from '../../actions/project'
import classes from './ProjectAdd.module.css'
import '../../App.css'


const mapStateToProps = (state) => {
  return({
    id: Object.keys(state.projectsByIds.projects).length+1,
    projects: state.projectsByIds.projects
  })
}

const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (id, name) => dispatch(handleProjectAdd(id, name))
})

const ProjectAddComponent = ({id, dispatchOnProjectAdd}) => {
  const onSubmit = (id, name) => (dispatchOnProjectAdd(id, name))
  return (
      <div>
          <ProjectInput onSubmit={onSubmit} id={id}/>
      </div>
  )
}
  
export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent)



class ProjectInput extends React.Component {
  state = {
    projectName: ''
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget
    this.setState({ [name]: value })
  }
  
  handleSumbit = (event) => { 
    event.preventDefault()
    const name = this.state.projectName
    return this.props.onSubmit(this.props.id, name)
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <div className={classes.taskImage}></div>
        <fieldset>
          <input 
              required
              value={this.state.name} 
              name="projectName" 
              placeholder='Enter name of project'
              onChange={this.handleChange} 
          />
        </fieldset>
        <button className='button1' type='submit'>Add new project</button>
      </form>
    )
  }
}
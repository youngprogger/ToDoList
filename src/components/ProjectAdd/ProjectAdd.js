import React from 'react'
import classes from './ProjectAdd.module.css'
import '../../App.css'

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
      return this.props.onSubmit(name)
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

  const ProjectAdd = ({onSubmit}) => {
    return (
        <div>
            <ProjectInput onSubmit={onSubmit}/>
        </div>
    )
  }
  
  
  export default ProjectAdd
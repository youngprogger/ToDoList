import React from 'react'
import {connect} from 'react-redux'
import {handleProjectAdd} from '../../actions/project'
import classes from './ProjectAdd.module.css'
import '../../App.css'

const mapStateToProps = (state) => {
  console.log(state);
  return state
}

const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (id, name) => dispatch(handleProjectAdd(id, name))
})

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

  const ProjectAddComponent = ({onSubmit}) => {
    return (
        <div>
            <ProjectInput onSubmit={onSubmit}/>
        </div>
    )
  }
  
export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent)
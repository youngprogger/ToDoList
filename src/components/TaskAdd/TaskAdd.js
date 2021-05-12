import React from 'react'
import classes from './TaskAdd.module.css'
import '../../App.css'

class TaskInput extends React.Component {
    state = {
      taskName: '',
      taskDescription: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }
    
    handleSumbit = (event) => { 
      event.preventDefault()
      const name = this.state.taskName
      const description = this.state.taskDescription
      return this.props.onSubmit(name, description)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSumbit}>
          <div className={classes.taskImage}></div>
          <fieldset>
            <input 
                required
                value={this.state.name} 
                name="taskName" 
                placeholder='Enter name of task'
                onChange={this.handleChange} 
            />
            <input 
                required
                value={this.state.description} 
                name='taskDescription'
                placeholder='Enter description'
                onChange={this.handleChange} 
            />
          </fieldset>
          <button className='button1' type='submit'>Add new task</button>
        </form>
      )
    }
  }

  const TaskAdd = ({onSubmit}) => {
    return (
        <div>
            <h2>Create new task?</h2>
            <TaskInput onSubmit={onSubmit}/>
        </div>
    )
  }
  
  
  export default TaskAdd
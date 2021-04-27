import React from 'react'

class TaskInput extends React.Component {
    state = {
      taskName: '',
      taskDescription: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }
  
    render() {
  
      return (
        <fieldset>
          <input required
              value={this.state.name} 
              name="taskName" 
              placeholder='Введите название'
              onChange={this.handleChange} 
          />
          <input required
              value={this.state.description} 
              name='taskDescription'
              placeholder='Введите описание'
              onChange={this.handleChange} 
          />
        </fieldset>
      )
    }
  }

  const TaskAdd = ({onSubmit}) => {
    return (
        <form>
            <h2>Создать новую задачу</h2>
            <TaskInput/>
            <button name='Submit' onClick={onSubmit}>Submit</button>
        </form>
    )
  }
  
  
  export default TaskAdd
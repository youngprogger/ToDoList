import './App.css';
import React from 'react';

import TaskList from './components/TaskList/TaskList'
import TaskAdd from './components/TaskAdd/TaskAdd'

class MyTodoList extends React.Component {
  state = {
    tasks: [{
      id: 1,
      name: 'Visit my grandma',
      description: 'On friday i should visit my grandma and spent time with she',
      completed: true
    },
    {
      id: 2,
      name: 'Dedline at my ux/ui design courses',
      description: 'I should add my new work on Behance',
      completed: false
    },
    {
      id: 3,
      name: 'Buy Tesla shares',
      description: 'This is a perfect moment to buy Tesla shares this weekend',
      completed: false
    },
    {
      id: 4,
      name: 'Go to the Gym',
      description: 'I nevet went to the gym after my illness. It is time to get in shape!',
      completed: true
    },
    {
      id: 5,
      name: 'Coursework',
      description: 'It is time to start my coursework',
      completed: false
    },
    {
      id: 6,
      name: 'Work deadline',
      description: "It's time to start my coursework",
      completed: true
    }
  ]
  };

  
  submitHandler = (name, description) => {
    console.log(name, description)
    if (name && description) {
      this.setState( (prevState) => { 
        const newTasksArr = [...prevState.tasks] 
        const tasksLastID = newTasksArr.length 
        newTasksArr[tasksLastID] = { 
          id: tasksLastID+1, 
          name: name,
          description: description,
          completed: false
        }
        return {
          tasks: newTasksArr
          }
        })
      }
    else {
      return alert('Enter task name and description')
    }
  }

  
  handleTaskStatus = (taskID) => {
    
    const tasks = this.state.tasks;
    const taskToChangeStatusID = tasks.findIndex( (task) => task.id === taskID )
    this.setState((currState) => {
      const newTasksArr = [...currState.tasks] 
      newTasksArr[taskToChangeStatusID] = { ...newTasksArr[taskToChangeStatusID], completed: !currState.tasks[taskToChangeStatusID].completed }
      return {
        tasks: newTasksArr 
      }
    })
  }

  render() {
    const tasks = this.state.tasks

    return (  
      <React.Fragment>
          <TaskAdd onSubmit={this.submitHandler}/>
          <TaskList tasksArr={tasks} onClick={this.handleTaskStatus}/>
      </React.Fragment>)
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <div><h1>Weekly Tasks:</h1></div>
          <MyTodoList/>
        </div>
      </header>
    </div>
  );
}






export default App;

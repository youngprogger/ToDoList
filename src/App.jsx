import React from 'react';
import classnames from "classnames/bind"
import styles from "./App.module.scss"


import TaskList from './components/TaskList/TaskList'
import TaskAdd from './components/TaskAdd/TaskAdd'

const cx = classnames.bind(styles)

class MyTodoList extends React.Component {
  state = {
    theme: "dark",
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

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
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
          
      <header className={cx(`App-header-theme-${this.state.theme}`)}>
        <div>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              checked={this.state.theme === "light"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="light">Light theme</label>
          </div>

          <div>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              checked={this.state.theme === "dark"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="dark">Dark theme</label>
      </div>
      <div><h1>Weekly Tasks:</h1></div>
            <h2>Create new task?</h2>
        <React.Fragment>
          <header className={cx(`App-header-theme-${this.state.theme}`)}>
          <TaskAdd onSubmit={this.submitHandler}/>
          <div className={cx('container')}>
          <TaskList tasksArr={tasks} onClick={this.handleTaskStatus}/>
          </div>
          </header>
        </React.Fragment>
       </header>
    )
  }
}


function App() {
  return (
    <div className="App">  
        <div>
          <MyTodoList/>
        </div>
    </div>
  );
}






export default App;

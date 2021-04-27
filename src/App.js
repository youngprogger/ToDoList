import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <MyTodoList/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class MyTodoList extends React.Component {
  state = {
    tasks: [{
      id: 1234,
      name: 'Name of the task',
      description: 'What needs to be done',
      completed: true
    },
    {
      id: 1235,
      name: 'Name of the task',
      description: 'What needs to be done',
      completed: true
    },
    {
      id: 1236,
      name: 'Name of the task',
      description: 'What needs to be done',
      completed: true
    }
  ]
  };
  clickHandler = () => {
    return console.log(`Task ${this.state.id} completed status = ${this.state.completed}`)
  }

  render() {
    const tasks = this.state.tasks    
    return (
      tasks.map( (task) => { 
        return(
          <TaskComplete
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            completed={task.completed}
            onClick={this.clickHandler}
          />
        )
      })
    )
  }
}
const TaskComplete = ({ id, name, description, completed }) => {
  const handleClick = () => {if (completed === true){completed = false } else {completed = true} return (console.log(`Task ${id} completed status = ${completed}`)) }

  return (
    <div id={id}>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{completed.toString()}</p>
        <button onClick={handleClick}/>
    </div>
  )
}






export default App;

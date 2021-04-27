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

  // СОЗДАТЬ НОВУЮ ЗАДАЧУ
  submitHandler = (event) => {
    event.preventDefault()

    const name = document.getElementsByName('taskName')[0].value // инпут названия таска
    const description = document.getElementsByName('taskDescription')[0].value // инпут описания таска

    description&&name ? this.setState( (prevState) => { // если поля desription и name заполнены.. 
      const newTasksArr = [...prevState.tasks] // дублируем таски из стейта
      const tasksLastID = newTasksArr.length // присвоем IDшник новой таске = +1 к последнему таскID из стейта
      newTasksArr[tasksLastID] = { // если name и desciption заполнены..
        id: tasksLastID+1, // то творим новый объект для нового таска
        name: name,
        description: description,
        completed: false
      } 

      return {
        tasks: newTasksArr //.. то обновляем стейт
      }
    })
    : alert('Enter name and description!') // ..а если пусты, то алёртим пользователя, чтобы тот внес данные
  }

  // СМЕНИТЬ СТАТУС ЗАДАЧИ - completed поставить TRUE или FALSE
  handleTaskStatus = (event) => {
    const clickedBtn = event.target 
    const taskID = clickedBtn.closest('div').id
    this.setState((prevState) => {
      const newTasksArr = [...prevState.tasks] // дублируем стейт
      newTasksArr[taskID-1] = { ...newTasksArr[taskID-1], completed: !prevState.tasks[taskID-1].completed } // инвертируем булевое значение
      return {
        tasks: newTasksArr // сетим новым стейт
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
        <div><h1>Задачи на неделю:</h1></div>
          <MyTodoList/>
        </div>
      </header>
    </div>
  );
}






export default App;

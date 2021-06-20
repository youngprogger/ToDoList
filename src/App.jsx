import React from 'react';
import classnames from "classnames/bind"
import styles from "./App.module.scss"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import {handleProjectAdd} from './actions/project'
import {handleTaskAdd} from './actions/task'

import TaskList from './components/TaskList/TaskList'
import ProjectList from './components/ProjectList/ProjectList'
import TaskAdd from './components/TaskAdd/TaskAdd'
import {ProjectAdd} from './components/ProjectAdd/ProjectAdd'
import { rootReducer } from './reducers/reducer'

const store = createStore(rootReducer)

const cx = classnames.bind(styles)
var projectId;



const mapStateToProps = (state) => {
  console.log('STATE',state.projectsByIds.projects);
  return ({
    projects: state.projectsByIds.projects
  })
}
const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (id, name) => dispatch(handleProjectAdd(id, name))
});
class ProjectsListComponent extends React.Component {
  constructor() {
    super();
      this.state = {
        theme: "dark"
      };  
    }
    
  
  // submitHandler = (name, description) => {
  //   console.log(name, description)
  //   if (name && description) {
  //     const tasks = this.state.tasksById;
  //     var lastId = Object.keys(tasks).length;
  //     tasks[lastId+1] = {
  //       id: lastId+1, 
  //       name: name,
  //       description: description,
  //       completed: false
  //     }
  //     this.setState({tasksById:tasks})
  //     const project = this.state.projectsById[projectId['projectId']]
  //     project.tasksIds.push(lastId + 1)
  //     localStorage.setItem('tasksById', JSON.stringify(this.state.tasksById))
  //     localStorage.setItem('projectsById', JSON.stringify(this.state.projectsById))
  //     handleTaskAdd(lastId+1, name, description);
  //   }
  //   else {
  //     return alert('Enter task name and description')
  //   }
  // }
  
  submitProjectHandler = (name) => {
    const id = this.props.projects.length
    console.log(id, name );
    
    return this.props.dispatchOnProjectAdd(id, name)
  }
  // submitProjectHandler = (name) => {
  //   if (name != "") {
  //     const projects = this.state.projectsById;
  //     var lastId = Object.keys(projects).length;
  //     projects[lastId+1] = {
  //       id: lastId+1, 
  //       name: name,
  //       tasksIds: []
  //     }
  //     this.setState({projectsById:projects})
  //     localStorage.setItem('projectsById', JSON.stringify(this.state.projectsById))
  //     handleProjectAdd(lastId+1, name)  
  //   }
  //   else {
  //     return alert('Enter project name')
  //   }
  // }


  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
  }
  
  // handleTaskStatus = (taskID) => {
  //   const tasks = this.state.tasksById;
  //   tasks[taskID].completed = !tasks[taskID].completed
  //   this.setState({tasksById:tasks})
  //   localStorage.setItem('state', JSON.stringify(this.state))
  // }

  render() {

    // if (projectId != null){
    //   const tmptasks = this.state.tasksById
    //   const tmpproject = this.state.projectsById[projectId['projectId']]
    //   if (tmpproject === undefined){
    //     return <Redirect to="/" />
    //   }
    //   var tasks = []
    // for (var i in tmptasks){
    //   if (tmpproject.tasksIds.some(v => v === tmptasks[i].id)){
    //     tasks.push(tmptasks[i])
    //   }
    // }
    // return (  
          
    //   <header className={cx(`App-header-theme-${this.state.theme}`)}>
    //     <div>
    //         <input
    //           type="radio"
    //           name="theme"
    //           id="light"
    //           value="light"
    //           checked={this.state.theme === "light"}
    //           onChange={this.handleThemeChange}
    //         />
    //         <label htmlFor="light">Light theme</label>
    //       </div>

    //       <div>
    //         <input
    //           type="radio"
    //           name="theme"
    //           id="dark"
    //           value="dark"
    //           checked={this.state.theme === "dark"}
    //           onChange={this.handleThemeChange}
    //         />
    //         <label htmlFor="dark">Dark theme</label>
    //   </div>

    //   <div><h1>Weekly Tasks:</h1></div>
    //         <h2>Create new task?</h2>
    //     <React.Fragment>
    //       <header className={cx(`App-header-theme-${this.state.theme}`)}>
    //       <TaskAdd onSubmit={this.submitHandler}/>
    //       <div className={cx('container')}>
    //       {/* <TaskList tasksArr={tasks} onClick={this.handleTaskStatus}/> */}
    //       </div>
    //       </header>
    //     </React.Fragment>
    //    </header>
    // )
    // }
    // else{
    // const tmpprojects = this.state.projectsById;
    // var projects = []
    // for (var i in tmpprojects){
    //     projects.push(tmpprojects[i])
    //   }
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
            <h2>Create new project?</h2>
        <React.Fragment>
          <header className={cx(`App-header-theme-${this.state.theme}`)}>
          <ProjectAdd onSubmit={this.submitProjectHandler}/>
          <div className={cx('container')}>
          <ProjectList projectsArr={this.props.projects}/>
          </div>
          </header>
        </React.Fragment>
       </header>
    )
    }
  }


const ProjectsList = connect(mapStateToProps, mapDispatchToProps)(ProjectsListComponent)



const Header = () => {
  return (
    <div className={cx(`App-header-theme-dark`)}>
      <h2>Menu</h2>

      <ul className={cx('ul')}>
        <li className={cx(`ul li`)}>
          <a className={cx(`ul li a`)}><Link to="/">Home</Link></a>
        </li>
        <li className={cx(`ul li`)}> 
        <a className={cx(`ul li a`)}><Link to="/projects/">Projects</Link></a>
        </li>
      </ul>
      <hr />
    </div>
  )
}

const Projects = () => {
  projectId = null;
  return (
    <div className="App">
    <h2>Projects</h2>
    <div>
          <ProjectsList/>
    </div>
  </div>
  )
  }

const SpecificProject = ({ match }) => {
  projectId = match.params
  console.log('PROJECT ID', projectId);
  if (!Number(projectId['projectId'])) {
    return <Redirect to="/" />
  }
  return (
      <div className="App">  
      <h2>Specific Project {projectId['projectId']}</h2>
        <div>
          {/* <MyTodoList/> */}
        </div>
    </div>
  )
}


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={cx(`App-header-theme-dark`)}>
          <Route path="/" component={Header} />
          <Route path="/projects/"/>

          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/projects/" component={Projects} />
            <Route path="/projects/:projectId/" component={SpecificProject} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}


  





export default App;

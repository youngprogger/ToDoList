import React from 'react'
import classnames from "classnames/bind"
import styles from "../../App.module.scss"

const cx = classnames.bind(styles)

const Task = ({ id, name, description, completed, onClick }) => {  
  return (
      <div className={cx('container1')} id={id}>
          <h4 className={cx(`task`)}>{name}</h4>
          <p className={cx(`task`)}>{description}</p>
          <p className={cx(`task`)}>{completed.toString()}</p>
          <button className={cx(`button1`)} onClick={() => onClick(id)}><p className={cx('task-button')}>{!completed ? 'Done' : 'Undone'}</p></button>
      </div>
    )
  }

export default Task
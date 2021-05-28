import React from 'react'
import classnames from "classnames/bind"
import styles from "../../App.module.scss"

const cx = classnames.bind(styles)

const Project = ({ id, name}) => {  
  return (
    <a href={`/projects/${id}`}>
          <div className={cx('container1')} id={id}>
          <h4 className={cx(`task`)}>{name}</h4>
      </div>
    </a>
    )
  }

export default Project
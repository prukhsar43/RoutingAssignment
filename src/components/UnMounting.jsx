import React from 'react'
import style from './Header.module.css'

const UnMounting = () => {
  return (
    <div className={style.unmounting}>
        <h1> Unmounting    </h1>
            <p>This is the last phase in the component’s lifecycle. As the name clearly suggests, the component gets unmounted from the DOM in this phase. The method that is available in this phase is: </p>
       <h3>1. componentWillUnmount()</h3>
        <p>This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, ‘componentWillUnMount’ executes. This method denotes the end of the component’s lifecycle</p>
        </div>
  )
}

export default UnMounting
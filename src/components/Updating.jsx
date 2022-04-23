import React from 'react'
import style from './Header.module.css'

const Updating = () => {
  return (
    <div className={style.updating}><h1>Updating</h1>
     <p> This is the third phase through which our component passes. After the mounting phase where the component has been created, the update phase comes into the scene. This is where component’s state changes and hence, re-rendering takes place.</p>
     <p>shouldComponentUpdate()
This method determines whether the component should be updated or not. By default, it returns true. But at some point, if you want to re-render the component on some condition, then shouldComponentUpdate method is the right place.</p>
<h3>2. componentWillUpdate()</h3>

<p>Like other methods, its name is also self-explanatory. It is called before the re-rendering of the component takes place. It is called once after the ‘shouldComponentUpdate’ method</p>

<h3>3. ComponentDidUpdate()</h3>

<p>This method is called just after the re-rendering of the component. After the new (updated) component gets updated on the DOM, the ‘componentDidUpdate’ method is executed. This method receives arguments like prevProps and prevState.</p>
    </div>
  )
}

export default Updating
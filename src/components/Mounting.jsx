import React from 'react'
import style from './Header.module.css'

const Mounting = () => {
  return (
    <div className={style.mounting}><h1>Mounting</h1>
         <p> Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM).
        This phase comes onto the scene after the initialization phase is completed. In this phase, our component renders the first time. The methods that are available in this phase are:</p>
        
      <h3>1. componentWillMount()</h3> 

       <p>This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.</p>

           <h3>2. componentDidMount()</h3>

             <p>This method is called after the component gets mounted on the DOM. Like componentWillMount, it is called once in a lifecycle. Before the execution of this method, the render method is called (i.e., we can access the DOM). We can make API calls and update the state with the API response.</p>
        
        </div>
     
       
  )
}

export default Mounting
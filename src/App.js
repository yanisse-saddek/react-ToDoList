import TaskList from './component/TaskList'
import Task from './component/Task'
import { useState } from 'react'
import {createContext} from 'react'

export const Context = createContext();   
function App() {
  
  var tasks = [
     {  title: 'Tache 01', priority: 'Important'},        
     { title: 'Tache 02', priority: 'Urgent'}   
  ]
  const [task, setTask] = useState(tasks)

  const changeTask = (data)=>{    
    setTask(data)
  }
  var sendToContext = {
    tasks:task,
    changeTasks:changeTask
  }
  return (
    <>
  <Context.Provider value={sendToContext}>
    <Task/>  
    <TaskList/>
  </Context.Provider>
    </>
    )
}

export default App;

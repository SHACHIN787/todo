
import { useEffect, useState } from 'react'
import './App.css'
import TaskApp from './TaskApp'
import TaskItem from './TaskItem'
function App() {
  const[tasks,setTasks]= useState([]);

  useEffect(()=>{
    if(tasks.length === 0)return;
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  useEffect(()=>{
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks || []);
  },[]);

function addTask(name){
      setTasks(prev => {
        return[...prev,{name:name,done:false}]
      })
}
function CheckBoxDone(taskIndex,newDOne){
        setTasks(prev=>{
          const newTasks =[...prev];
          newTasks[taskIndex].done =newDOne;
          return newTasks;
        })
}
{/*function removeTask(removeIndex){
        setTasks(prev=>{
          return prev.filter((taskObject,index)=>{index !== removeIndex;})
        })
}*/}
function removeTask(removeIndex) {
  setTasks(prev => {
    return prev.filter((taskObject, index) => index !== removeIndex);
  });
}
function renameTask(index,newName){
    setTasks(prev=>{
      const newTasks=[...prev]
      newTasks[index].name = newName
      return newTasks;
    })

}

const numberComplete = tasks.filter(t => t.done).length;
const numberTasks = tasks.length;
  return (
    <main>
   {/*<TaskApp onAdd={addTask}/>
    {tasks.map(task => (<TaskItem/> ))}*/}
    <h1>You {numberComplete}/{numberTasks} completed</h1>
    <TaskApp onAdd={addTask} />
    {tasks.map((task, index) => (
        <TaskItem key={index} {...task}
        onTrash={()=>removeTask(index)}
        onRename ={newName=>renameTask(index,newName)}
         onToggle ={done=>CheckBoxDone(index,done)} />
      ))}

  </main>
  )
}

export default App

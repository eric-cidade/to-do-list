import styles from'./App.module.css'
import { Header } from './components/Header'
import { NewTaskBar } from './components/NewTaskBar'
import { TaskFeed } from './components/TaskFeed'
import { ChangeEvent, useState, FormEvent } from 'react'
import './global.css'



const initialTasks = [
  {id: 1, content:'Terminar DLC Elden Ring', status:'todo'}, 
  {id: 2, content:'Pegar Mestre no LoL', status:'todo'}, 
  {id: 3, content:'Terminar projeto to-do-list', status:'todo'}];

function App() {

  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState('')
  
  function changeStatus(taskId: number) {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? {...task, status: task.status === 'todo' ? 'done' : 'todo'} : task
      )
    );
  };
   
  const tasksCompleted = tasks.filter(task => task.status === 'done').length;
  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value)
  }

  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {id: tasks.length + 1, content: newTask, status:'todo'}]);
    setNewTask('');
  }
  

  function deleteTask (taskToDelete: number) {
    const newTasks = tasks.filter(task => {return task.id != taskToDelete});
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <NewTaskBar newTask={newTask} newTaskChangeHandler={handleNewTaskChange} createNewTaskHandler={handleCreateNewTask}/>
        <TaskFeed onStatusChange={changeStatus} taskList={tasks} n_tasks={tasks.length} n_tasksCompleted={tasksCompleted} onDeleteTask={deleteTask}/>
      </div>
    </div>
  )
}

export default App

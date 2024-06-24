import styles from'./App.module.css'
import { Header } from './components/Header'
import { NewTaskBar } from './components/NewTaskBar'
import { TaskFeed } from './components/TaskFeed'
import './global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <NewTaskBar />
        <TaskFeed />
        
      </div>
    </div>
  )
}

export default App

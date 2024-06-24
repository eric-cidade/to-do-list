import styles from './TaskFeed.module.css'
import { Task } from './Task.tsx'
import Clipboard from '../assets/Clipboard.svg'

interface task {
    content: string;
    status: string;
    id: number;
}
interface TaskFeedProps {
    taskList: task[];
    onDeleteTask: (content: string) => void;
    n_tasks: number;
    n_tasksCompleted: number
    onStatusChange: (taskId : number) => void;
}
export function TaskFeed({taskList, onDeleteTask, n_tasks, n_tasksCompleted, onStatusChange}: TaskFeedProps) {
    return (
        <>
        <div className={styles.taskFeedHeader}>
            <div className={styles.tasksCreated}>
                <p><b>Created tasks</b></p>
                <div className={styles.number}>
                    <p>{n_tasks}</p>
                </div>
            </div>
            <div className={styles.tasksDone}>
                <p><b>Done</b></p>
                <div className={styles.number}>
                    <p>{n_tasksCompleted} de {n_tasks}</p>
                </div>
            </div>   
        </div>
        {taskList.length > 0 ? 
        (
            <div className={styles.taskFeed}>
                {taskList.map((task) => (   
                    <Task 
                        key={task.id} 
                        id={task.id} 
                        onStatusChange={onStatusChange} 
                        content={task.content} 
                        status={task.status} 
                        onDeleteTask={onDeleteTask}/>
                ))
            }
            </div>
        ) : (
            <div className={styles.emptyFeed}>
                <img src={Clipboard} alt="" />
                <p><b>No tasks created yet</b></p>
                <p>Create tasks and organize your to-do-list</p>
            </div>
        )}
        
        
    </>
    );
}
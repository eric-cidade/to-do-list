import styles from './TaskFeed.module.css'
import { Task } from './Task.tsx'

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
                <p><b>Tarefas criadas</b></p>
                <div className={styles.number}>
                    <p>{n_tasks}</p>
                </div>
            </div>
            <div className={styles.tasksDone}>
                <p><b>Concluidas</b></p>
                <div className={styles.number}>
                    <p>{n_tasksCompleted} de {n_tasks}</p>
                </div>
            </div>   
        </div>
        <div className={styles.taskFeed}>
            {taskList.map((task) => (   
                 <Task key={task.id} id={task.id} onStatusChange={onStatusChange} content={task.content} status={task.status} onDeleteTask={onDeleteTask}/>
            ))}
        </div>
        
    </>
    );
}
import styles from './TaskFeed.module.css'
import { Task } from './Task.tsx'

export function TaskFeed() {
    return (
        <>
        <div className={styles.taskFeedHeader}>
            <div className={styles.tasksCreated}>
                <p><b>Tarefas criadas</b></p>
                <div className={styles.number}>
                    <p>5</p>
                </div>
            </div>
            <div className={styles.tasksDone}>
                <p><b>Concluidas</b></p>
                <div className={styles.number}>
                    <p>2 de 5</p>
                </div>
            </div>   
        </div>
        <Task />
    </>
    );
}
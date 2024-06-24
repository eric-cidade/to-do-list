import styles from './Task.module.css'
import { Trash } from 'phosphor-react';
import { Check } from 'phosphor-react';

interface TaskProps {
    id: number;
    content: string;
    onDeleteTask: (taskToDelete: string) => void;
    status: string;
    onStatusChange: (taskId: number) => void;
}
export function Task({content, id, status, onDeleteTask, onStatusChange}: TaskProps) {

    function handleCheckBoxClick() {
        onStatusChange(id)
    }

    function handleDeleteTask() {
        console.log("Delete task")
        onDeleteTask(content);
    }

    if(status==='todo')
    {
        return (
            <div className={styles.task}>
                <button className={styles.checkBoxEmpty} onClick={handleCheckBoxClick}/>
                <p>{content}</p>
                <button className={styles.trash}><Trash size={24}/></button>
            </div>
        );
    }
    else return (
        <div className={styles.taskDone}>
            <button className={styles.checkBoxFilled} onClick={handleCheckBoxClick}>
                <Check />
            </button>
            <p>{content}</p>
            <button className={styles.trash} onClick={handleDeleteTask}><Trash size={24}/></button>
        </div>
    )
}
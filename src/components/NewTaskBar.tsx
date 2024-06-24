import { ChangeEvent, FormEvent } from 'react';
import plus from '../assets/plus.svg'
import styles from './NewTaskBar.module.css'

interface NewTaskBarProps {
    newTask: string;
    newTaskChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    createNewTaskHandler: (event: FormEvent) => void;
}

export function NewTaskBar({newTask, newTaskChangeHandler, createNewTaskHandler}: NewTaskBarProps) {

    const isNewTaskTextEmpty = newTask.length === 0;
   
    return (
        <div className={styles.taskBar}>
            <textarea
                    name='comment' 
                    placeholder='Add new task'
                    onChange={newTaskChangeHandler}
                    value={newTask}
                    required
            />
            <button type='submit' disabled={isNewTaskTextEmpty} onClick={createNewTaskHandler}>
                Create
                <img className={styles.plus} src={plus} alt="" />
            </button>
        </div>
    );
}
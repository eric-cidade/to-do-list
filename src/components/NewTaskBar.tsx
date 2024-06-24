import { ChangeEvent, useState } from 'react';
import plus from '../assets/plus.svg'
import styles from './NewTaskBar.module.css'



export function NewTaskBar() {
    const [newTaskText, setNewTaskText] = useState('')

    const isNewTaskTextEmpty = newTaskText.length === 0;

    function handleNewTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTaskText(event.target.value)
    }
    return (
        <div className={styles.taskBar}>
            <textarea
                    name='comment' 
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleNewTaskTextChange}
                    value={newTaskText}
                    required
            />
            <button type='submit' disabled={isNewTaskTextEmpty}>
                Criar
                <img className={styles.plus} src={plus} alt="" />
            </button>
        </div>
    );
}
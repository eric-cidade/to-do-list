import styles from './Task.module.css'
import { Trash } from 'phosphor-react';
export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkbox} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis adipisci, cupiditate numquam fuga libero voluptates est pariatur tempora fugiat quia.</p>
            <button className={styles.trash}><Trash size={24}/></button>
        </div>
    );
}
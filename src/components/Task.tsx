import styles from './Task.module.css'
import { Trash } from 'phosphor-react';
import { Check } from 'phosphor-react';
import { useState} from 'react';

export function Task() {
    const [isChecked, setIsChecked] = useState(false);
    function handleCheckBoxClick() {
        isChecked ? setIsChecked(false) : setIsChecked(true)
    }
    if(!isChecked)
    {
        return (
            <div className={styles.task}>
                <button className={styles.checkBoxEmpty} onClick={handleCheckBoxClick}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis adipisci, cupiditate numquam fuga libero voluptates est pariatur tempora fugiat quia.</p>
                <button className={styles.trash}><Trash size={24}/></button>
            </div>
        );
    }
    else return (
        <div className={styles.taskDone}>
            <button className={styles.checkBoxFilled} onClick={handleCheckBoxClick}>
                <Check />
            </button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis adipisci, cupiditate numquam fuga libero voluptates est pariatur tempora fugiat quia.</p>
            <button className={styles.trash}><Trash size={24}/></button>
        </div>
    )
}
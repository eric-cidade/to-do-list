import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} alt="" />
                <p className={styles.to}><b>to</b></p>
                <p className={styles.do}><b>do</b></p>
            </div>
        </header>
    );
}
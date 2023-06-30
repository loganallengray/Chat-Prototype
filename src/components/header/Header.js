import styles from './Header.module.css';

const Header = () => {
    return (
        <ul id={styles.header}>
            <li id={styles.headerTitle}>Wiserdime</li>
            <li className={styles.headerItem}>Accounts</li>
            <li className={styles.headerItem}>Chat</li>
            <li className={styles.headerItem}>Referrals</li>
            <li className={styles.headerItem}>Feedback</li>
            <li className={styles.headerItem}>Settings</li>
        </ul>
    );
}

export default Header;
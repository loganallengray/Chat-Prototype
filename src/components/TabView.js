import styles from './AppView.module.css';

const TabView = () => {
    return (
        <ul id={styles.tabView}>
            <li className={styles.tabViewItem}>
                <p className={styles.tabViewText}>Accounts</p>
            </li>
            <li className={styles.tabViewItem}>
                <p className={styles.tabViewText}>Chat</p>
            </li>
            <li className={styles.tabViewItem}>
                <p className={styles.tabViewText}>Referrals</p>
            </li>
            <li className={styles.tabViewItem}>
                <p className={styles.tabViewText}>Feedback</p>
            </li>
            <li className={styles.tabViewItem}>
                <p className={styles.tabViewText}>Settings</p>
            </li>
        </ul>
    )
}

export default TabView;
import styles from './Header.module.css';

const Header = () => {
    return (
        <ul id={styles.header} className='mobile-header'>
            <li id={styles.headerTitle}>Wiserdime</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Accounts</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Chat</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Referrals</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Feedback</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Settings</li>
        </ul>
    );
}

export default Header;
import { useContext } from 'react';
import styles from './Header.module.css';
import ChatContext from '../../context/chat-context';

const Header = () => {
    const cxt = useContext(ChatContext);

    return (
        <ul id={styles.header} className='mobile-header'>
            {/* <li className='mobile-showHeaderItem'>
                <div id={styles.openSidebar} className={styles.viewChat} onClick={cxt.toggleShowSideBar}>View Chats</div>
            </li> */}
            <li id={styles.headerTitle}>Wiserdime</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Accounts</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Chat</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Referrals</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Feedback</li>
            <li className={`${styles.headerItem} mobile-hideHeaderItem`}>Settings</li>
            <li className='mobile-showHeaderItem'>
                <div id={styles.openSidebar} className={styles.viewButton} onClick={cxt.toggleShowSideBar}>{cxt.showSidebar ? "Hide" : "View"} Chats</div>
            </li>
        </ul>
    );
}

export default Header;
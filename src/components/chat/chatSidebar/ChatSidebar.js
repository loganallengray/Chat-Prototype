import styles from './ChatSidebar.module.css';

const ChatSidebar = () => {
    return (
        <div id={styles.sidebar}>
            <div id={styles.sidebarHead}>
                <div id={styles.sidebarHeadNew}>New Chat</div>
                <div id={styles.sidebarHeadClose}>Close</div>
            </div>
        </div>
    )
}

export default ChatSidebar;
import styles from './AppView.module.css';
import ChatContainer from "./chat/ChatContainer";
import ChatSidebar from './chat/chatSidebar/ChatSidebar';

const AppView = () => {
    return (
        <div id={styles.content}>
            <ChatSidebar />
            <ChatContainer />
        </div>
    )
}

export default AppView;
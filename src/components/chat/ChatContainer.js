import styles from './ChatContainer.module.css';
import MessageBar from './send/MessageBar';
import ChatView from './view/ChatView';


const ChatContainer = () => {
    return (
        <div id={styles.chatContainer}>
            <ChatView />
            <MessageBar />
        </div>);
}

export default ChatContainer;
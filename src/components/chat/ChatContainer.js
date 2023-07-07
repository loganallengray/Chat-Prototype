import { useContext } from 'react';
import styles from './ChatContainer.module.css';
import MessageBar from './send/MessageBar';
import ChatView from './view/ChatView';
import ChatContext from '../../context/chat-context';

const ChatContainer = () => {
    const cxt = useContext(ChatContext);

    return (
        <div id={styles.chatContainer} className={cxt.showSidebar ? "mobile-chatContainer" : ""}>
            <ChatView />
            <MessageBar />
        </div>);
}

export default ChatContainer;
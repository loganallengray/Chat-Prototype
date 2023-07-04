import { useContext } from 'react';
import styles from './ChatView.module.css';
import ChatContext from '../../../context/chat-context';

const ChatView = () => {
    const cxt = useContext(ChatContext);

    return (
        <ul id={styles.chat}>
            {cxt.chats[0].messages.map(message => (
                <li key={message.id}>{message.content}</li>
            ))}
        </ul>
    )
}

export default ChatView;
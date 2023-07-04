import { useContext } from 'react';
import styles from './ChatView.module.css';
import ChatContext from '../../../context/chat-context';
import UserMessage from './messageStyles/UserMessage';

const ChatView = () => {
    const cxt = useContext(ChatContext);

    // if (cxt.chats[cxt.currentChat] !== undefined) {
    return (
        <ul id={styles.chat}>
            {cxt.chats[cxt.currentChat].messages.map(message => (
                <UserMessage key={message.id} message={message} />
            ))}
        </ul>
    )
    // }
}

export default ChatView;
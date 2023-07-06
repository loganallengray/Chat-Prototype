import { useContext } from 'react';
import styles from './ChatView.module.css';
import ChatContext from '../../../context/chat-context';
import UserMessage from './messageStyles/UserMessage';
import AIMessage from './messageStyles/AIMessage';

const ChatView = () => {
    const cxt = useContext(ChatContext);

    const chat = cxt.chats.find(chat => chat.id === cxt.currentChat);

    if (chat !== undefined) {
        return (
            <ul id={styles.chat}>
                {chat.messages.map(message => (
                    message.userSent
                        ? <UserMessage key={message.id} message={message} />
                        : <AIMessage key={message.id} message={message} />
                ))}
            </ul>
        )
    } else {
        return (
            <ul id={styles.chat}></ul>
        )
    }
}

export default ChatView;
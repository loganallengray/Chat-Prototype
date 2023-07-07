import { useContext } from 'react';
import styles from './ChatView.module.css';
import ChatContext from '../../../context/chat-context';
import UserMessage from './messageStyles/UserMessage';
import AIMessage from './messageStyles/AIMessage';
import ChatPlaceholder from './ChatPlaceholder';

const ChatView = () => {
    const cxt = useContext(ChatContext);

    const chat = cxt.chats.find(chat => chat.id === cxt.currentChat);

    if (chat !== undefined && chat.messages.length !== 0) {
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
            <ul id={styles.chat}>
                <ChatPlaceholder />
            </ul>
        )
    }
}

export default ChatView;
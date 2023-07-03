import { useContext } from 'react';
import styles from './ChatView.module.css';
import ChatContext from '../../../context/chat-context';

const ChatView = () => {
    const cxt = useContext(ChatContext);

    return (
        <ul id={styles.chat}>
        </ul>
    )
}

export default ChatView;
import React, { useContext } from "react";
import ChatContext from "../../../../context/chat-context";
import styles from './ChatList.module.css';

const ChatList = () => {
    const cxt = useContext(ChatContext);

    return (
        <ul id={styles.chatList}>
            {cxt.chats.map(chat => (
                <li key={chat.id} className={styles.chatButton}>{chat.name}</li>
            ))}
        </ul>
    );
}

export default ChatList;
import React, { useContext } from "react";
import ChatContext from "../../../../context/chat-context";
import styles from './ChatList.module.css';

const ChatList = () => {
    const cxt = useContext(ChatContext);

    const switchChatHandler = (event) => {
        const [, chatIdStr] = event.target.id.split("--");
        const chatId = Number(chatIdStr);

        cxt.setCurrentChat(chatId - 1);
    }

    return (
        <ul id={styles.chatList}>
            {cxt.chats.map(chat => (
                <li
                    id={`chat--${chat.id}`}
                    key={chat.id}
                    className={chat.id === cxt.currentChat ? `${styles.chatButton} ${styles.selected}` : styles.chatButton}
                    onClick={switchChatHandler}
                >{chat.name}</li>
            ))}
        </ul>
    );
}

export default ChatList;
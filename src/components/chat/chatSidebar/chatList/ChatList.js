import React, { useContext } from "react";
import ChatContext from "../../../../context/chat-context";
import styles from './ChatList.module.css';

const ChatList = () => {
    const cxt = useContext(ChatContext);

    const clickChatHandler = (event) => {
        const [str, chatIdStr] = event.target.id.split("--");
        const chatId = Number(chatIdStr);

        switch (str) {
            case "chat":
                cxt.setCurrentChat(chatId);
                break;
            case "edit":
                const editChats = [...cxt.chats];

                editChats.find(chat => chat.id === chatId).name = "test";
                cxt.setChats(editChats);
                break;
            case "delete":
                const deleteChats = [...cxt.chats];

                const filteredChats = deleteChats.filter(chat => chat.id !== chatId);
                cxt.setCurrentChat(-1)
                cxt.setChats(filteredChats);
                break;
            default:
                break;
        }
    }

    return (
        <ul id={styles.chatList}>
            {cxt.chats.map((chat) => {
                if (chat.id === cxt.currentChat) {
                    return (
                        <li
                            id={`chat--${chat.id}`}
                            key={chat.id}
                            className={`${styles.chatButton} ${styles.selected}`}
                            onClick={clickChatHandler}
                        >
                            {chat.name}
                            <div className={styles.optionsWrapper}>
                                <div id={`edit--${chat.id}`} className={styles.option}>Edit</div>
                                <div id={`delete--${chat.id}`} className={styles.option}>Delete</div>
                            </div>
                        </li>
                    )
                } else {
                    return (
                        <li
                            id={`chat--${chat.id}`}
                            key={chat.id}
                            className={styles.chatButton}
                            onClick={clickChatHandler}
                        >{chat.name}</li>
                    )
                }
            })}
        </ul>
    );
}

export default ChatList;
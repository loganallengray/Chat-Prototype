import styles from './ChatSidebar.module.css';
import React, { useContext } from 'react';
import ChatContext from '../../../context/chat-context';

const ChatSidebar = () => {
    const cxt = useContext(ChatContext);

    const newChatHandler = (event) => {
        const newChats = [...cxt.chats];

        newChats.push({
            id: 1,
            name: "test",
            messages: []
        })

        cxt.setChats(newChats);
    }

    return (
        <div id={styles.sidebar}>
            <div id={styles.sidebarHead}>
                <div id={styles.sidebarHeadNew} onClick={newChatHandler}>New Chat</div>
                <div id={styles.sidebarHeadClose}>Close</div>
            </div>
        </div>
    )
}

export default ChatSidebar;
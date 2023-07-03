import styles from './ChatSidebar.module.css';
import React, { useContext } from 'react';
import ChatContext from '../../../context/chat-context';
import ChatList from './chatList/ChatList';

const ChatSidebar = () => {
    const cxt = useContext(ChatContext);

    const newChatHandler = (event) => {
        const newChats = [...cxt.chats];
        let currentId = cxt.currentId;

        newChats.push({
            id: currentId,
            name: `Chat #${currentId}`,
            messages: []
        })

        cxt.setChats(newChats);
        cxt.setCurrentId(currentId + 1);
    }

    return (
        <div id={styles.sidebar}>
            <div id={styles.sidebarHead}>
                <div id={styles.sidebarHeadNew} onClick={newChatHandler}>New Chat</div>
                <div id={styles.sidebarHeadClose}>Close</div>
            </div>
            <ChatList />
        </div>
    )
}

export default ChatSidebar;
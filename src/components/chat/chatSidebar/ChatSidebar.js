import styles from './ChatSidebar.module.css';
import React, { useContext, useState } from 'react';
import ChatContext from '../../../context/chat-context';
import ChatList from './chatList/ChatList';

const ChatSidebar = () => {
    const cxt = useContext(ChatContext);

    const newChatHandler = (event) => {
        const newChats = [...cxt.chats];
        let currentId = cxt.currentChatId;

        newChats.push({
            id: currentId,
            name: `Chat #${currentId}`,
            messages: []
        })

        cxt.setChats(newChats);
        cxt.setCurrentChatId(currentId + 1);
    }

    if (cxt.showSidebar) {
        return (
            <div id={styles.sidebar}>
                <div id={styles.sidebarHead}>
                    <div id={styles.newChat} className={styles.headButton} onClick={newChatHandler}>New Chat</div>
                    <div id={styles.closeSidebar} className={styles.headButton} onClick={cxt.toggleShowSideBar}>Close</div>
                </div>
                <ChatList />
            </div>
        )
    } else {
        return (
            <div onClick={cxt.toggleShowSideBar}>Open</div>
        )
    }
}

export default ChatSidebar;
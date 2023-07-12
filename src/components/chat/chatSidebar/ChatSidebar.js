import styles from './ChatSidebar.module.css';
import React, { useContext, useState } from 'react';
import ChatContext from '../../../context/chat-context';
import ChatList from './chatList/ChatList';
import BorderButton from '../../../UI/buttons/BorderButton';

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
        cxt.setCurrentChat(currentId);
        cxt.setCurrentChatId(currentId + 1);
        if (window.innerWidth < 680) {
            cxt.toggleShowSidebar()
        }
    }

    if (cxt.showSidebar) {
        return (
            <div id={styles.sidebar} className="mobile-sidebar">
                <div id={styles.sidebarHead}>
                    <BorderButton id={styles.newChat} onClick={newChatHandler}>New Chat</BorderButton>
                    <BorderButton id={styles.closeSidebar} className="mobile-hideSidebarButton" onClick={cxt.toggleShowSidebar}>Close</BorderButton>
                </div>
                <ChatList />
            </div>
        )
    } else {
        return (
            <BorderButton id={styles.openSidebar} className={`${styles.headButton} mobile-hideSidebarButton`} onClick={cxt.toggleShowSidebar}>Open</BorderButton>
        )
    }
}

export default ChatSidebar;
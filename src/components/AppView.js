import { useContext, useLayoutEffect, useState } from 'react';
import styles from './AppView.module.css';
import ChatContainer from "./chat/ChatContainer";
import ChatSidebar from './chat/chatSidebar/ChatSidebar';
import ChatContext from '../context/chat-context';
import TabView from './TabView';

const AppView = () => {
    const cxt = useContext(ChatContext);

    if (!cxt.showTabView) {
        return (
            <div id={styles.content}>
                <ChatSidebar />
                <ChatContainer />
            </div>
        )
    } else {
        return (
            <TabView />
        )
    }
}

export default AppView;
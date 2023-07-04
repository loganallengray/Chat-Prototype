import React, { useContext, useState } from 'react';
import styles from './MessageBar.module.css';
import ChatContext from '../../../context/chat-context';

const MessageBar = () => {
    const cxt = useContext(ChatContext);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();

        const newChats = [...cxt.chats]
        const currentId = cxt.currentMessageId;

        newChats[0].messages.push({
            id: currentId,
            content: message,
            userSent: true
        });

        cxt.setChats(newChats);
        cxt.setCurrentMessageId(currentId + 1);
        setMessage("");
    }

    return (
        <form onSubmit={sendMessage} id={styles.messageBar}>
            <input
                type="text"
                value={message}
                onChange={handleChange} />
            <button>Send</button>
        </form>
    )
}

export default MessageBar;
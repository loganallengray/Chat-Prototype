import React, { useContext, useState } from 'react';
import styles from './MessageBar.module.css';
import ChatContext from '../../../context/chat-context';
import DarkButton from '../../../UI/buttons/DarkButton';

const MessageBar = () => {
    const cxt = useContext(ChatContext);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();

        const currentId = cxt.currentMessageId;
        const newChats = [...cxt.chats]
        let currentChat = cxt.currentChat;

        // Will create new chat if user is not currently on a chat
        if (currentChat === -1) {
            let currentChatId = cxt.currentChatId;

            newChats.push({
                id: currentChatId,
                name: `Chat #${currentChatId}`,
                messages: []
            })

            cxt.setCurrentChatId(currentId + 1);
            currentChat = currentChatId;
            cxt.setCurrentChat(currentChat);
        }


        newChats.find(chat => chat.id === currentChat).messages.push({
            id: currentId,
            content: message,
            userSent: true
        });

        // cxt.setChats(newChats);
        // cxt.setCurrentMessageId(currentId + 1);
        setMessage("");

        // For receiving a "AI message"
        // This would be replaced by whatever would send the message to the LLM so it could make a response.
        const responses = [
            "Hello! Welcome to Wiserdime, how may I assist you today?",
            "I'm sorry, I don't have the information you're looking for at the moment.",
            "I'm an AI language model, so I don't have personal experiences or emotions.",
            "I can assist you with a wide range of topics. Please let me know what you need help with.",
            "I'm here to provide information and answer your questions to the best of my abilities.",
            "I'm constantly learning and improving, so if I don't have the answer now, I might in the future.",
            "I'm designed to assist with various tasks, from answering questions to providing recommendations.",
            "I'm an AI and I don't have personal opinions, but I can provide you with different perspectives on a topic.",
            "I'm here to help, so please feel free to ask me anything you'd like to know.",
            "My responses are generated based on patterns and information I've learned from a wide range of sources."
        ]

        const chosenResponse = responses[Math.floor(Math.random() * responses.length)];

        newChats.find(chat => chat.id === currentChat).messages.push({
            id: currentId + 1,
            content: chosenResponse,
            userSent: false
        })

        cxt.setCurrentMessageId(currentId + 2);
        cxt.setChats(newChats);
    }

    return (
        <form onSubmit={sendMessage} id={styles.messageBar}>
            <input
                type="text"
                value={message}
                onChange={handleChange} />
            <DarkButton>Send</DarkButton>
        </form>
    )
}

export default MessageBar;
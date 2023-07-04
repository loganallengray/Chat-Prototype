import AppView from "./components/AppView";
import Header from "./components/header/Header";
import ChatContext from "./context/chat-context"
import './App.css';
import { useState } from "react";

function App() {
  const [chats, setChats] = useState([{ id: 0, name: "default", messages: [] }]);
  const [currentChat, setCurrentChat] = useState(0);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [currentMessageId, setCurrentMessageId] = useState(1);

  return (
    <div id="app">
      <Header />
      <ChatContext.Provider value={
        {
          currentChat: currentChat,
          setCurrentChat: setCurrentChat,
          currentChatId: currentChatId,
          setCurrentChatId: setCurrentChatId,
          currentMessageId: currentMessageId,
          setCurrentMessageId: setCurrentMessageId,
          chats: chats,
          setChats: setChats
        }
      }>
        <AppView />
      </ChatContext.Provider>
    </div>
  );
}

export default App;

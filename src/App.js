import AppView from "./components/AppView";
import Header from "./components/header/Header";
import ChatContext from "./context/chat-context"
import './App.css';
import { useState } from "react";

function App() {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(0);
  const [currentId, setCurrentId] = useState(1);

  return (
    <div id="app">
      <Header />
      <ChatContext.Provider value={
        {
          currentChat: currentChat,
          setCurrentChat: setCurrentChat,
          currentId: currentId,
          setCurrentId: setCurrentId,
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

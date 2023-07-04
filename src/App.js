import AppView from "./components/AppView";
import Header from "./components/header/Header";
import ChatContext from "./context/chat-context"
import './App.css';
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [chats, setChats] = useState([{ id: 0, name: "default", messages: [{ id: 1, content: "test", userSent: true }] }]);
  const [currentChat, setCurrentChat] = useState(0);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [currentMessageId, setCurrentMessageId] = useState(1);

  const toggleShowSideBar = (event) => {
    setShowSidebar((prevState) => !prevState);
  }

  return (
    <div id="app">
      <Header />
      <ChatContext.Provider value={
        {
          showSidebar,
          toggleShowSideBar,
          currentChat,
          setCurrentChat,
          currentChatId,
          setCurrentChatId,
          currentMessageId,
          setCurrentMessageId,
          chats,
          setChats
        }
      }>
        <AppView />
      </ChatContext.Provider>
    </div>
  );
}

export default App;

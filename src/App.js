import AppView from "./components/AppView";
import Header from "./components/header/Header";
import ChatContext from "./context/chat-context"
import './App.css';
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [chats, setChats] = useState([{ id: 1, name: "Chat #1", messages: [] }]);
  const [currentChat, setCurrentChat] = useState(0);
  const [currentChatId, setCurrentChatId] = useState(2);
  const [currentMessageId, setCurrentMessageId] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    message: "",
  });

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
          setChats,
          modal,
          setShowModal,
          setModal,
        }
      }>
        <AppView />
        {showModal ? <Modal setShowModal={setShowModal} modal={modal} /> : ""}
      </ChatContext.Provider>
    </div>
  );
}

export default App;

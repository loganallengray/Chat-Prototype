import './styles/mobile.css';
import './styles/scrollbar.css';
import AppView from "./components/AppView";
import Header from "./components/header/Header";
import ChatContext from "./context/chat-context";
import './App.css';
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showTabView, setShowTabView] = useState(false);
  const [chats, setChats] = useState([{ id: 1, name: "Chat #1", messages: [] }]);
  const [currentChat, setCurrentChat] = useState(1);
  const [currentChatId, setCurrentChatId] = useState(2);
  const [currentMessageId, setCurrentMessageId] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({
    name: "",
    type: "",
    title: "",
    message: "",
  });
  const [feedback, setFeedback] = useState([]);
  // {positive: boolean, messageId: num, content: ""}

  const toggleShowSidebar = (event) => {
    setShowSidebar((prevState) => {
      if (!prevState && showTabView) {
        setShowTabView(false)
      }
      return !prevState
    });

    if (showSidebar && showTabView) {
      setShowTabView(false);
    }
  }

  const toggleShowTabView = (event) => {
    setShowTabView((prevState) => {
      if (!prevState && showSidebar) {
        setShowSidebar(false)
      }
      return !prevState
    });
  }

  return (
    <div id="app">
      <ChatContext.Provider value={
        {
          showTabView,
          toggleShowTabView,
          showSidebar,
          toggleShowSidebar,
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
          feedback,
          setFeedback
        }
      }>
        <Header />
        <AppView />
        {showModal ? <Modal setShowModal={setShowModal} modal={modal} /> : ""}
      </ChatContext.Provider>
    </div>
  );
}

export default App;

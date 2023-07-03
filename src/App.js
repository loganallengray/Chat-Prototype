import AppView from "./components/AppView";
import Header from "./components/header/Header";
import ChatContext from "./context/chat-context"
import './App.css';

function App() {
  return (
    <div id="app">
      <Header />
      <ChatContext.Provider value={[{ id: 1, text: "test" }]}>
        <AppView />
      </ChatContext.Provider>
    </div>
  );
}

export default App;

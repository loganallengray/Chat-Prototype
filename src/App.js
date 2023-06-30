import AppView from "./components/AppView";
import Header from "./components/header/Header";
import './App.css';
import ChatView from "./components/chat/ChatView";

function App() {
  return (
    <div id="app">
      <Header />
      <AppView id="content">
        <ChatView />
      </AppView>
    </div>
  );
}

export default App;

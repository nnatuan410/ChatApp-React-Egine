import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/index';
import './App.css';
import LoginForm from './components/Login/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
      <ChatEngine
        height="100vh"
        projectID='dd29388d-3917-40ac-8823-8aee820105e5'
        userName='tuannguyen410'
        userSecret='123123'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
  )
}

export default App;

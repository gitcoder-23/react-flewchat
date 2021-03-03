import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'c6f95acf-77a3-4475-8ee2-ca0214f5a2ea';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    // projectID taken from https://chatengine.io/
    // "renderChatFeed" render all chat in chat field
    // user1: flewchatmaster, pwd: 123456
    // user2: atulkumar, pwd: 1234567
    // mikejodon. 123456
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;

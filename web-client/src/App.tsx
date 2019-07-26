import React from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import ChatArea from './Components/ChatArea';
import NewMessage from './Components/NewMessage';

import { MessageContextProvider, IMessageContext } from './Context'

const InitialValue: IMessageContext = {
  messages: []
}

const App: React.FC = () => {
  return (
    <div className="App">
      <MessageContextProvider value={InitialValue}>
        <AppHeader/>
        <ChatArea />
        <NewMessage />
      </MessageContextProvider>
    </div>
  );
}

export default App;

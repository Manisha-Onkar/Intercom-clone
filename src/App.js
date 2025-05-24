
import React from 'react';
import Dashboard from './Pages/Dashboard'; 
import { ChatProvider } from './Context/ChatContext'; 

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ChatProvider>
  );
}

export default App;

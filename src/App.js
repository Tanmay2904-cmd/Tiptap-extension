import React from 'react';
import './App.css';
import TiptapEditor from './TiptapEditor'; // Import your TiptapEditor

function App() {
  return (
    <div className="App">
      <h1>Welcome to Tiptap Editor</h1>
      <TiptapEditor /> {/* Render the Tiptap editor here */}
    </div>
  );
}

export default App;

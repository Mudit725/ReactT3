import React from 'react';
import './App.css'; 
import Picker from './components/Picker';

function App() {
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'purple', 'brown', 'gray', 'cyan', 'magenta', 'violet', 'indigo', 'teal', 'lime', 'olive', 'maroon', 'navy', 'fuchsia', 'aqua'];

  return (
    <div className="App">
      <Picker colors={colors} /> {Picker}
    </div>
  );
}

export default App;
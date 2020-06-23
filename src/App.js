import React from 'react';
import './App.css';

import UseInput from './components/useInput'
import UseTabs from './components/useTabs'
import UseTitle from './components/useTitle'



function App() {
  
  return (
    <div className="App">
      <UseInput />
      <hr />
      <UseTabs />
      <hr />
      <UseTitle />
    </div>
  );
}

export default App;

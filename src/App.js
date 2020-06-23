import React from 'react';
import './App.css';

import UseInput from './components/useInput'
import UseTabs from './components/useTabs'
import UseTitle from './components/useTitle'
import UseClick from './components/useClick'



function App() {
  
  return (
    <div className="App">
      <UseInput />
      <hr />  
      <UseTabs />
      <hr />
      <UseTitle />
      <hr />
      <UseClick />
    </div>
  );
}

export default App;

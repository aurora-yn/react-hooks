import React from 'react';
import './App.css';

import UseInput from './components/useInput'
import UseTabs from './components/useTabs'
import UseTitle from './components/useTitle'
import UseClick from './components/useClick'
import UseConfirm from './components/useConfirm'
import UsePreventLeave from './components/usePreventLeave'
import UseBeforeLeave from './components/useBeforeLeave'



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
      <hr />
      <UseConfirm />
      <hr />
      <UsePreventLeave />
      <hr />
      <UseBeforeLeave />
      <hr />
    </div>
  );
}

export default App;

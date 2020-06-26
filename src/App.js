import React from 'react';
import './App.css';

import UseInput from './components/useInput'
import UseTabs from './components/useTabs'
import UseTitle from './components/useTitle'
import UseClick from './components/useClick'
import UseConfirm from './components/useConfirm'
import UsePreventLeave from './components/usePreventLeave'
import UseBeforeLeave from './components/useBeforeLeave'
import UseFadeIn from './components/useFadeIn'
import UseNetwork from './components/useNetwork'
import UseScroll from './components/useScroll'
import UseFullscreen from './components/useFullscreen'
import UseNotification from './components/useNotification'
import UseAxios from './components/useAxios'

function App() {
  const { loading, data, refetch } = UseAxios({ url: "URL HERE"});

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
      <UseFadeIn />
      <hr />
      <UseNetwork />
      <hr />
      <UseScroll />
      <hr />
      <UseFullscreen />
      <hr />
      <UseNotification />
      <hr />
      <div>
        <h1>13. useAxios</h1>
        <h3>{data && data.status}</h3>
        <h3>{loading && "loading"}</h3>
        <button onClick={refetch}>refetch</button>
      </div>
      <hr />
    </div>
  );
}

export default App;

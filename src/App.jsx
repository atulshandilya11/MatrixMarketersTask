import './App.css';
import React from 'react';
import { CakeView } from './features/cake/CakeView';
import { IcecreamView } from './features/icecream/IcecreamView';

import ComponentA from './Task2/UseContextEx/ComponentA';

import MousePosn from './Task2/UseEffectEx/MousePosn';
import Counter from './Task2/UseStateEx/Counter';
import MainComp from './Task2/UseCallbackEx/MainComp';
import UserView from './features/user/UserView';

export const companyContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1>Task No:- 1,3,4,5,6</h1>
      <CakeView />
      <IcecreamView />
      <br />
      <UserView />
      <hr />
      <h1>Task No:- 2</h1>
      <h4>*********useState Example********</h4>
      <Counter />
      <h4>**********useContext Example*************</h4>
      <companyContext.Provider value={'Matrix Marketers'}>
        <ComponentA />
      </companyContext.Provider>
      {/* // UseCallback hook example */}
      <MainComp />
      <h4>***********useEffect Example*************</h4>
      <MousePosn />
    </div>
  );
}

export default App;

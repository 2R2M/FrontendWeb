import React, { createContext } from 'react';
import MasterStore from "./common/store/masterStore"
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';


export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        masterStore: new MasterStore(),
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>,
);
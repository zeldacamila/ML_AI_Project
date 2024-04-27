import React from 'react';
import ReactDOM from 'react-dom/client';

//* Main Styles.
import './index.scss';

//* App.
import { BoardGamesApp } from './boardGamesApp';

//* REDUX.
import { Provider } from 'react-redux';
import { store } from './store/stores';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BoardGamesApp/>
    </Provider>
  </React.StrictMode>,
)

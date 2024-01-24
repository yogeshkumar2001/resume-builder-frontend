import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from "redux"
import { Provider, connect } from "react-redux"
import appReducer from './Redux/Reducer';
import {thunk} from "redux-thunk"
import {persistStore , persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
const persistConfig = {
  key: 'resume',
  storage,
}
const persistedReducer = persistReducer(persistConfig,appReducer)
let store = createStore(persistedReducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

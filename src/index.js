import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hi 2' },
  { id: 3, message: 'Hi 3' },
  { id: 4, message: 'Hi 4' },
]

let posts = [
  { id: 1, message: 'Hi', likesCount: 0 },
  { id: 2, message: 'It\'s my first post 2', likesCount: 10 },
  { id: 3, message: 'It\'s my first post 3', likesCount: 14 },
  { id: 4, message: 'It\'s my first post 4', likesCount: 15 },
]



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

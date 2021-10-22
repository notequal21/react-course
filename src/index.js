import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userImg from "./components/Dialogs/Chats/img_user.png";

let posts = [
    {id: 1, userName: 'Name Surname', postTime: '18:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
    {id: 2, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    {id: 3, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
    {id: 4, userName: 'Name Surname', postTime: '00:21', postDate: '12.10.2021', postText: 'Lorem.'},
]
let dialogs = [
    {id: 1, userName: 'Name Surname', userImg: userImg},
    {id: 2, userName: 'Name Surname', userImg: userImg},
    {id: 3, userName: 'Name Surname', userImg: userImg},
]
let messages = [
    {id: 1, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
    {id: 2, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
    {id: 3, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
    {id: 4, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
    {id: 5, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
]

ReactDOM.render(
  <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from "./ch04/Button";
import Clock from "./ch04/Clock"
import Comment from './ch05/Comment';
import CommentList from './ch05/CommemtList';
import NotificationList from './ch06/NotificationList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotificationList />
);



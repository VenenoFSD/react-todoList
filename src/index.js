import React from 'react';
import ReactDOM from 'react-dom';

// 引入组件, css
import TodoList from './TodoList';
import './style.css'

// 渲染到 /public/index.html 中的 <div id="root"></div> 内
ReactDOM.render(<TodoList />, document.getElementById('root'));

// note
// 1. 组件名首字母必须大写

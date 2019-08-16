import React from 'react';
import logo from './logo.svg';
import './App.css';

import Maths from './components/math'
import Header from './components/header'
import Content from './components/content'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Maths/>
        <Maths/>
        <Maths/>
      </Content>
    </div>
  );
}

export default App;

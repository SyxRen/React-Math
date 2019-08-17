import React from 'react';
import './App.css';

import Maths from './components/math/'
import Header from './components/header'
import Content from './components/content'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Maths type='Heat Map'/>
        <Maths type='Bar Chart'/>
        <Maths type='Bump Chart'/>
        <Maths type='Chord'/>
      </Content>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { List } from '../List';

const names = ['Anna', 'Oleg', 'Ilona', 'Ivan', 'Olha'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <List names = {names} />
      </header>
    </div>
  );
}

export default App;
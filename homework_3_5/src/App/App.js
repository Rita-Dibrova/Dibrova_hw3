import React from 'react';
import './App.css';
import Lists from '../components/Lists/Lists';

const female = ['Anna', 'Nina',  'Alina', 'Polina', 'Olha'];
const male = ['Denys', 'Oleg', 'Vitalii', 'Ivan', 'Rostislav'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lists list1={female} list2={male}/>
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import IssueList from './components/issueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Issue List</h1>
      </header>
      <IssueList />
    </div>
  );
}

export default App;

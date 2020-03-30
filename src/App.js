import React from 'react';
import './App.css';
import IssueList from './components/issueList';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Issue List</h1>
      </header>
      <div>
      <IssueList />
      </div>
    </div>
  );
}

export default App;

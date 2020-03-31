import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/issueList';
import IssueDetail from './components/issuedetail';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Route exact path='/' component={IssueList} />
        <Route path='/issue/:issue_number?' exact component={IssueDetail}/>
      </Router>
      </div>
    </div>
  );
}

export default App;

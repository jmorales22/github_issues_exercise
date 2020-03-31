import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IssueList extends Component {
    state = {
      issue: [],
    };
  
    async getData() {
      const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
      const data = await response.json();
      return data;
    };

    async componentDidMount() {
      const issue = await this.getData();
  
      this.setState({
        issue: issue
      });
    }
  
    render() {
        let issueArray = this.state.issue;
        
        return (
            <ul className="IssueListMap">
                {issueArray.length > 0 ? (
                issueArray.map(issue => (
                   <li key={issue.node_id}>
                    
                    { issue.title }
                    <br/>
                    <Link to={`/issue/${issue.number}`}>View Issue</Link>
                    </li>
                ))
                ) : (
                <li>No Issue Data</li>
                )}
            </ul>
        );
      }
    }
  export default IssueList;
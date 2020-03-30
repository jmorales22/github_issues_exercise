import React, { Component } from 'react';
import Issue from './issue';

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

    verifyIssue(issue) {
        return (
          <ul className="Issue">
            {issue.length > 0 ? (
              issue.map(issue => (
                <li className="Issue" key={issue.user.id}>
                  <Issue issue={issue} />
                </li>
              ))
            ) : (
              <li>Missing User Data</li>
            )}
          </ul>
        );
      };
    
  
    render() {
      const { issue } = this.state;
      console.log("issue data", issue)
      return (
        <div className="IssueList">
          <Issue issue={ issue } />
        </div>
      );
    }
  }
  
  export default IssueList;
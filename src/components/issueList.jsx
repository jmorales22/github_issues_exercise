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
  
    render() {
        let issueArray = this.state.issue;
        
        return (
          <ul className="IssueListMap">
            {issueArray.length > 0 ? (
              issueArray.map(issue => (
                <li className="IssueListLi" key={issue.node_id}>
                  <Issue issue={issue} />
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
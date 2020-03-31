import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class IssueDetail extends Component {
        state = {
          detail: []
        };

        async getData() {
            const { issue_number } = this.props.match.params;
            const response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`);
            const data = await response.json();
            return data;
          };

        async componentDidMount() {
          const detail = await this.getData();

          this.setState({
            detail
          });
        }

    render() {
       const { detail } = this.state;
    
        return(
            <div>
                <h1>{detail.title}</h1>
                <br/>
                <ReactMarkdown source={detail.body}/>
            </div>
        );
    }
}

export default IssueDetail;
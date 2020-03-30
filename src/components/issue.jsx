import React from 'react';
import { Columns, Column } from 'bloomer';

const Issue = props => {

  const { issue } = props;

  return (

    <div className="boxes">
        <Columns isCentered>
            <Column>
               <a href= { issue.url }>{ issue.url }</a>
            </Column>
            <Column>
                {issue.title}
            </Column>
        </Columns>
    </div>
  );
};

export default Issue;
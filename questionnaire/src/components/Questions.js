import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const Questions = props => {
  const questionList = [
    { description: 'How to render list in React?', key: 0 },
    { description: 'Do you like JS?', key: 1 },
    { description: 'Do you know CSS?', key: 2 }
  ];

  return (
    <ol>
      {questionList.map(question => {
        return <li key={question.key}>{question.description}</li>;
      })}
    </ol>
  );
};

export default Questions;

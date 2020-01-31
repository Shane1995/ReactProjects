import React from 'react';

import Header from './components/Header';
import Questions from './components/Questions';

import './App.css';

import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
  return (
    <div className="backgroud-wrapper">
      <Container className="wrapper">
        <Header />
        <Questions question="This is a question" />
      </Container>
    </div>
  );
}

export default App;

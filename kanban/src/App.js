import React from 'react';
import Card from './Card.jsx';

const CARDS = [{
  title: 'カードタイトル'
}]
function App() {
  return (
    <>
      <Card title={CARDS[0].title} />
    </>
  );
}

export default App;

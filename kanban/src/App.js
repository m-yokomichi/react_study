import React, {useState} from 'react';
import Card from './Card.jsx';

function App() {
  const [state, setState] = useState({
    cards: [
      { title: 'ここにタイトル' },
    ]
  })
  const { cards } = state

  const addCard = () => {
    cards.push({ title : '新規カード' })
    setState({cards})
  }
  return (
    <>
      { cards.map((card, i) =>  <Card title={card.title} key={i} />) }
      <button onClick={() => addCard()}>追加</button>
    </>
  );
}

export default App;

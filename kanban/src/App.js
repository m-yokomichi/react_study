import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import Navigation from './Navigation.jsx';
import CardList from './CardList.jsx';

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
  const removeCard = (key) => {
    delete cards[key]
    setState({cards})
  }
  const SCardLists = styled.div`
    display: "flex";
    flex-direction: "column";
    width: "100%";
    padding-left: 30px; // 一番左の調整用余白
  `
  return (
    <>
      <Navigation />
      <SCardLists>
        <CardList>
          {
            cards.map((card, i) =>
              <Card
                title={card.title}
                key={i}
                removeCard={() => {removeCard(i)}}
              />
            )
          }
          <button onClick={() => addCard()}>追加</button>
        </CardList>
      </SCardLists>
    </>
  );
}

export default App;

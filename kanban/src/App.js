import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import Navigation from './Navigation.jsx';
import CardList from './CardList.jsx';
import CreateModal from './CreateModal'

function App() {
  const [state, setState] = useState({
    cardLists: [
      {
        title: 'リストタイトルA',
        cards: [{ title: 'ここにタイトル' }],
      },
      {
        title: 'リストタイトルB',
        cards: [{ title: 'ここにタイトル' }],
      },
      {
        title: 'リストタイトルB',
        cards: [{ title: 'ここにタイトル' }],
      }
    ],
    targetListIndex: -1,
    shownCreateCardModal: false
  })
  const { cardLists ,cards, shownCreateCardModal} = state
  const openCreateCardModal = (targetListIndex) => {
    setState({
      ...state,
      shownCreateCardModal: true,
      targetListIndex
    })
  }
  const closeCreateCardModal = () => {
    setState({
      ...state,
      shownCreateCardModal: false
    })
  }

  const addCard = (newCard, cardLists, targetListIndex) => {
    cardLists[targetListIndex].cards.push(newCard)
    setState({
      ...state,
      cardLists,
      shownCreateCardModal: false
    })
  }
  const removeCard = (key, cardLists, targetListIndex) => {
    delete cardLists[targetListIndex].cards[key]
    setState({
      ...state,
      cardLists
    })
  }

  const SCardLists = styled.div`
    display: "flex";
    flex-direction: "column";
    width: "100%";
    padding-left: 30px; // 一番左の調整用余白
  `
  const SButton = styled.button`
  border: none; // 枠線の削除
  border-radius: .25rem; // それっぽい角丸
  box-sizing: border-box; // おまじない
  padding: 0.5rem; // それっぽい余白
  color: rgba(0,0,0,.5); // 文字色を薄くそれっぽく
  background: transparent; // 背景に馴染ませる  &:focus { // 押した時の青線を削除
  outline: 0;
  }

  &:hover { // カーソルを合わせた時に色が少し変わるように
    color: rgba(0,0,0,.8);
    background: rgba(0,0,0,.125);
  }
  `
  const SListTitle = styled.div`
    font-weight: bold;
    padding: 5px;
  `

  return (
    <>
      { shownCreateCardModal ? <CreateModal onAdd={addCard} onClose={closeCreateCardModal}/> : <></>}
      <Navigation />
      <SCardLists>
        {
          cardLists.map(({title, cards}, listIndex) => {
            const cardDoms = cards.map((card, cardIndex) => <Card title={card.title} removeCard={() => {
              removeCard(listIndex, cardIndex)
            }} key={cardIndex} />)
            return (
              <CardList key={listIndex}>
                <SListTitle>{ title }</SListTitle>
                { cardDoms }
                <SButton onClick={(e) => {
                  openCreateCardModal(listIndex)
                }}>追加</SButton>
              </CardList>
            )
          })
        }
      </SCardLists>
    </>
  );
}

export default App;

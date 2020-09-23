import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import Navigation from './Navigation.jsx';
import CardList from './CardList.jsx';
import CreateModal from './CreateModal'
import { ReactSortable } from 'react-sortablejs'

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
    shownCreateCardModal: false,
    shownCreateCardListModal: false
  })
  const { cardLists , shownCreateCardModal, targetListIndex, shownCreateCardListModal} = state

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

  const addCard = (newCard) => {
    console.log(targetListIndex)
    cardLists[targetListIndex].cards.push(newCard)
    setState({
      ...state,
      cardLists,
      shownCreateCardModal: false
    })
  }
  const removeCard = (key) => {
    delete cardLists[targetListIndex].cards[key]
    setState({
      ...state,
      cardLists
    })
  }

  const addCardList = (newCardList) => {
    cardLists.push({cards: [], ...newCardList})
    setState({ ...state, cardLists, shownCreateCardModal: false})
  }

  const openCreateCardListModal = () => {
    setState({ ...state, shownCreateCardListModal: true })
  }

  const closeCreateCardListModal = () => {
    setState({ ...state, shownCreateCardListModal: false })
  }

  const setCards = cardLists.map((_, listIndex) => {
    return (newCards) => {
      cardLists[listIndex].cards = newCards
      console.log(listIndex)
      setState({ ...state, cardLists })
    }
  })

  const SCardLists = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box; /* widthに余白を含める設定 */
    padding-left: 30px; /* 一番左の調整用余白 */
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
  const SAddListButton = styled(SButton)` // SButtonのstyleを上書きして新しいコンポーネントを作成
    margin: 30px 30px 30px 0px;
    min-width: 128px;
  `

  const SListTitle = styled.div`
    font-weight: bold; // 太字
    padding: 5px; // 適度な余白
    flex-grow: 1; /* 要素を最大限伸ばす */
    /* タイトルが長い時「...」にする */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width:0;
  `

  return (
    <>
      { shownCreateCardListModal ?
        <CreateModal
          onAdd={(newCardList) =>addCardList(newCardList)}
          onClose={closeCreateCardListModal}
        /> :
        <></>
      }
      { shownCreateCardModal ? <CreateModal onAdd={addCard} onClose={closeCreateCardModal}/> : <></>}
      <Navigation />
      <SCardLists>
        {
          cardLists.map(({title, cards}, listIndex) => {
            const cardComponents = cards.map((card, cardIndex) => <Card title={card.title} removeCard={() => {
              removeCard(listIndex, cardIndex)
            }} key={cardIndex} />)
            return (
              <CardList key={listIndex}>
                <SListTitle>{ title }</SListTitle>
                <ReactSortable
                  list={cards}
                  setList={(newCards) => setCards[listIndex](newCards)}
                  group='card'
                  animation={150}
                  style={{ flexGrow: 1 }}
                >
                  { cardComponents }
                </ReactSortable>
                <SButton onClick={(e) => {
                  openCreateCardModal(listIndex)
                }}>追加</SButton>

              </CardList>
            )
          })
        }
        <SAddListButton onClick={(e) => {
          openCreateCardListModal()
        }}>リストを追加</SAddListButton>
      </SCardLists>
    </>
  );
}

export default App;

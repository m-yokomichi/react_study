import React from 'react';
import styled from 'styled-components';

function Card({ title, removeCard}) {
    return (
        <SCard>
            <p>{ title }</p>
            <SDeleteButton onClick={() => {removeCard()}}>削除</SDeleteButton>
        </SCard>
    );
}

const SDeleteButton = styled.button`
  // デフォルトでついているstyleを削除
  border: none;
  background: transparent;
  &:focus {
    outline: 0;
  }
  // フォントサイズを少し小さく
  font-size: 0.75rem;
  // 文字色をグレーに
  color: #888;
`

const SCard = styled.div`
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
  background: #eee;
  box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
  width: 244px;

  padding: 6px 8px;

  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`

export default Card;
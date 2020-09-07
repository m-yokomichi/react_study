import React from 'react'
import styled from 'styled-components'

const CardList = ({ children }) => {
    return (
        <SCardList>{children}</SCardList>
    );
}

const SCardList = styled.div`
    display: flex;
    flex-direction: column;

    width: 272px;
    margin: 30px 30px 30px 0px;
    padding: 5px;
    box-sizing: border-box;

    cursor: pointer; // カーソルを変更してそれっぽく
    background: #ebecf0; // それっぽい背景色
    border-radius: .25rem; // それっぽく角を丸める
    & > * {
        // つまり感排除のための余白を子（カード）全てに設定
        margin-bottom: 5px;
    }

`

export default CardList;
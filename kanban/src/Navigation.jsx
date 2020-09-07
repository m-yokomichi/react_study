import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
    return <SNavigation><SLogo>Kanban</SLogo></SNavigation>
}

const SLogo = styled.div`
    font-size: 24px;
    user-select: none; // 選択不可
    font-family: 'Pacifico', cursive; // importしたwebフォントを適用
`
const SNavigation = styled.div` // styled-componentsで定義
    display: flex; // レイアウトにflexを利用
    align-items: center; // flexレイアウト適用時、縦の位置をセンターに
    height: 32px; // 高さ
    width: 100%; // 幅いっぱいに広げる
    color: white; // 文字の色は白
    background: #0f3460; // それっぽい色
    padding: 10px 30px; // それっぽい余白
`

export default Navigation
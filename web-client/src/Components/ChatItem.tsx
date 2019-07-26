import React from 'react'
import styled from 'styled-components';

export default function ChatItem(props: any) {
    const { username, timestamp, message } = props

    const MessageContainer = styled.div`
        display: flex; 
        &:nth-child(2n) {
            background: #eee;
        }
        padding: 10px;
    `

    const UsernameContainer = styled.div`
        font-weight: bold;
        margin-right: 5px;
        
    `

    const MessageText = styled.div`
        word-wrap: break-word;
        white-space: initial;
        flex: 1;
    `

    const TimestampContainer = styled.div`
        font-style: italic;
        color: grey;
        margin-right: 5px;
    `

    return (
        <MessageContainer>
            <UsernameContainer>{username}</UsernameContainer>
            <TimestampContainer>{timestamp}</TimestampContainer>
            <MessageText>{message}</MessageText>
        </MessageContainer>
    )
}

import React, { useState } from 'react'
import styled from 'styled-components';
import { emitMessage } from '../api/socket';
import { Message } from '../Models/Message';


const NewMessageContainer = styled.div`
    height: 50px;
    width: 100%;
    background: #2196F3;
    display: flex;
`
const NewMessagEntry = styled.textarea`
    width: 100%;
    height: 100%;
    flex: 4;
    resize: none;
`
const NewMessageButton = styled.button`
    width: 100%;
    height: 100%;
    flex: 1;
`

export default function NewMessage() {

    const [message, setMessage] = useState('');

    let handleClick = () => {
        let constructedMessage: Message = new Message(message)
        emitMessage(constructedMessage);
        setMessage('');
    }

    let handlePressEnter = (e: any) => {
        if(e.key === 'Enter'){
            handleClick()
        }
    }

    return (
        <div>
            <NewMessageContainer>
                <NewMessagEntry placeholder="Enter message here" onChange={e => setMessage(e.target.value)} onKeyUp={handlePressEnter} value={message}></NewMessagEntry>
                <NewMessageButton onClick={handleClick}>Send</NewMessageButton>
            </NewMessageContainer>
        </div>
    )
}

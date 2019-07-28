import React, { Component } from 'react'
import styled from 'styled-components';

export default function AppHeader() {
    const HeaderContainer = styled.div`
        display: flex;
        width: 100%
        height: 50px;
        background: #3F51B5;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        z-index: 1;
        color: white;
    `

    const HeaderText= styled.div`
        user-select: none;
        cursor: default;
        font-family: sans-serif;
        font-size: 25px;
    `

    const HeaderSignIn = styled.div`
    `

    let signedIn = false;
    return (
        <div>
            <HeaderContainer>
                <HeaderText>React + Typescript + Socket.IO + ExpressJS Chat</HeaderText>
                <HeaderSignIn>{signedIn ? <div>Log Out</div> : <div>Sign In</div>}</HeaderSignIn>
            </HeaderContainer>
        </div>
    )
}


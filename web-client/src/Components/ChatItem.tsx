import React from "react";
import styled from "styled-components";

export default function ChatItem(props: any) {
  const { username, timestamp, message } = props;

  const MessageContainer = styled.div`
    display: flex;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    overflow-x: none;
    overflow-wrap: break-word;
    &:nth-child(2n) {
      background: #eee;
    }
  `;

  const UsernameContainer = styled.div`
    font-weight: bold;
    margin-right: 5px;
  `;

  const MessageText = styled.div`
    word-wrap: break-word;
    flex: 1;
    margin-left: 5px;
  `;

  const TimestampContainer = styled.div`
    font-style: italic;
    color: grey;
    margin-right: 5px;
  `;

  return (
    <MessageContainer>
      <UsernameContainer>{username}</UsernameContainer>
      <TimestampContainer>{timestamp}</TimestampContainer>
      <MessageText>{message}</MessageText>
    </MessageContainer>
  );
}

import { Message } from './Models/Message';
import React from 'react';

export interface IMessageContext {
    messages: Message[]
}

export const MessagesContext = React.createContext<IMessageContext | null>(null);

export const MessageContextProvider = MessagesContext.Provider;
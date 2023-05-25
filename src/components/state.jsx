import React, { createContext, useEffect, useContext, useReducer, useState } from 'react';

import {PORT} from '../../backend/src/constants';

// seperate state into context slices so we can access them seperately.
// Define individual contexts
export const WebSocketContext = createContext();
export const ColorContext = createContext();
export const MessageContext = createContext();
export const UserContext = createContext();

// WebSocketProvider
export const WebSocketProvider = ({ children }) => {
    // the server is always localhost, but the client won't always be.
    // so, we can't define the host in constants.js as well.
    const host = 'ws://localhost:' + PORT;

    const [ws, setWs] = useState(null);
    useEffect(() => {
        const websocket = new WebSocket(host);
        websocket.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        setWs(websocket);
        return () => {
            websocket.close();
        };
    }, []);

    const sendSocket = (message) => {
        const sending_message = JSON.stringify(message);
        if (ws) {
            ws.send(sending_message);
        }
    };

    return (
        <WebSocketContext.Provider value={{ ws, sendSocket }}>
            {children}
        </WebSocketContext.Provider>
    );
};

// MessageProvider
// state context for the chat feature
export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    return (
        <MessageContext.Provider value={{ messages, setMessages }}>
            {children}
        </MessageContext.Provider>
    );
};

// ColorProvider
export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export const UserProvider = ({ children }) => {
    // the local user on the frontend
    const [user, setUser] = useState(null);
    // all the users on the backend
    // update this state when we get the appropriate message from the backend
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('users updated')
        console.log('user context users:\n', users)
    }, [users])

    return (
        <UserContext.Provider value={{ user, setUser, users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hooks for accessing the contexts
export const useWebSocketContext = () => useContext(WebSocketContext);
export const useColorContext = () => useContext(ColorContext);
export const useMessageContext = () => useContext(MessageContext);
export const useUserContext = () => useContext(UserContext);

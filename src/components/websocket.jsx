// this is different enough from the rest of the state that it deserves its own module.
// it USES the other state.
// it not only provides write access, it writes to state itself.
import React, { useEffect, useState, createContext, useContext } from 'react';

import { useUserContext, useMessageContext, usePenContext } from './state';

import {PORT} from '../../backend/src/constants';

export const WebSocketContext = createContext();


/// NOTE:
// the frontend can write to the backend basically whenever it wants, which is probably necessary and doesn't seem like that big of a deal,
// especially since it's all going through the same function, making it easy to debug.

// this is not bidirectional. the backend should only be able to communicate with the frontend through this contextprovider.
// all in all, this is the one place that communication happens.

// WebSocketProvider
export const WebSocketProvider = ({ children }) => {
    // the server is always localhost, but the client won't always be.
    // so, we can't define the host in constants.js as well.
    const host = 'ws://localhost:' + PORT.toString();

    const { user, setUser, users, setUsers } = useUserContext();
    const { messages, setMessages } = useMessageContext();
    const { color, setColor, size, setSize, shape, setShape } = usePenContext();

    const [ws, setWs] = useState(null);
    useEffect(() => {
        const websocket = new WebSocket(host);
        websocket.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        // this is the main place where the frontend collides with the backend.
        websocket.onmessage = (message) => {
        };

        setWs(websocket);

        // on component demount
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

export const useWebSocketContext = () => useContext(WebSocketContext);

import React, { createContext, useEffect, useContext, useReducer, useState } from 'react';

import { PenShape } from '../../backend/src/constants';

// seperate state into context slices so we can access them seperately.
// Define individual contexts
export const MessageContext = createContext();
export const UserContext = createContext();
export const PenContext = createContext();

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

export const PenProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(5);
    const [shape, setShape] = useState(PenShape.CIRCLE);

    return (
        <PenContext.Provider value={{color, setColor, size, setSize, shape, setShape}}>
            {children}
        </PenContext.Provider>
    );
}

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
export const useMessageContext = () => useContext(MessageContext);
export const useUserContext = () => useContext(UserContext);
export const usePenContext = () => useContext(PenContext);

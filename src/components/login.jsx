import React from 'react';
import { useState, useEffect } from 'react';
import * as C from '../../backend/src/constants'

import { useUserContext } from './state';

import { useWebSocketContext } from './websocket';

const Login = (props) => {
    const [name, setName] = useState('');
    const {sendSocket} = useWebSocketContext();
    const {user, setUser} = useUserContext();

    const handleClickSendMessage = () => {
        sendSocket(C.BuildLogin(name));
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleClickSendMessage}>
                Login
            </button>
        </div>
    );
}

export default Login;

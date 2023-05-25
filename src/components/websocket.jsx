import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {

    return (
        <div>
        <button onClick={() => sendMessage(JSON.stringify({type: 'login', username: 'user', password: 'pass'}))}>
            Send Message
        </button>
        {messages.map((message, index) =>
            <p key={index}>{message}</p>
        )}
        </div>
    );
}

export default WebSocketComponent;

import React, { useState, useRef, useEffect } from 'react';
import Login from './components/login.jsx';
import DrawingComponent from './drawing.jsx';
import ChatComponent from './chat.jsx';

function App() {
    return (
        <div style={{
            display: 'flex',
        }}>
            <div style={{
                padding: '20px',
                width: '30%',
            }}>
                <Login />
                <ChatComponent /> 
            </div>
            <div style={{
                padding: '20px',
                width: '70%',
            }}>
                <DrawingComponent />
            </div>
        </div>
    )
}

export default App;

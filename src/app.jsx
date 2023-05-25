import React, { useState, useRef, useEffect } from 'react';
import Login from './components/login.jsx';
import DrawingComponent from './drawing.jsx';
import ChatComponent from './chat.jsx';
import HeaderComponent from './components/header.jsx';
import ChangeBackground from './components/change_background.jsx';
import Background from './components/background.jsx';

const App = () => {
    // returns a data link to an image on the user's computer.
    const [background, setBackground] = useState(null);

    useEffect(() => {
        if (!background) return;
        // set the background of the .container class to the new background image
        const container = document.querySelector('.container');
        container.style.backgroundImage = `url(${background})`;
        // dull the image
        container.style.backgroundImage = `linear-gradient(rgba(0,0,255,0.5), rgba(255,255,255,0.5)), url(${background})`;
    }, [background]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{
                position: 'absolute',
                height: '7%',
                width: '100%',
                zIndex: '1',
            }}>
                <HeaderComponent />
            </div>
            <div style={{
                position: 'absolute',
                margin: 'auto',
                padding: '0px',
                height: '100%',
                width: '100%',
            }}>
                <div style={{
                    height: '3%',
                }}></div>

                <div style={{
                    height: '90%',
                    margin: 'auto',
                    width: '100%',
                }} className='container'>
                    <div style={{
                        display: 'flex',
                    }}>
                        <div style={{
                            /* css pushes the last div to the bottom of the area. */
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '20px',
                            width: '30%',
                        }}>
                            <div>
                                <Background>
                                    <Login />
                                    <ChatComponent />
                                </Background>
                            </div>
                            <div>
                                <ChangeBackground setBackground={setBackground} />
                            </div>
                        </div>
                        <div style={{
                            padding: '20px',
                            width: '70%',
                        }}>
                            <DrawingComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

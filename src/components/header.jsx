import React from "react";
import Background from "./background";

const random_headers = [
    "DRAW SOMETHING",
    "IN THE ZONE",
    "CURRENTLY DRAWING",
    "NO GIRLS ALLOWED",
    "THEY KNOW YOU SAW THEM",
    "BLINX THE TIMESWEEPER FANCLUB",
    "THEY'RE WATCHING YOU",
];

const get_random_header = () => {
    return "DRAWPAL: " + random_headers[Math.floor(Math.random() * random_headers.length)];
}

const HeaderComponent = (props) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        }}>
            <Background red={25} green={2} blue={67} alpha={0.5}>
                <h1 style={{
                    marginRight: '100px',
                    color: 'gray',
                }}>{get_random_header()}</h1>
            </Background>
            <Background direction="row">
                <img style={{
                    marginLeft: '100px',
                    marginRight: '10px',
                    width: '64px',
                    height: '64px',
                }} src="/assets/drawpal_logo.png" alt="drawpal logo" />
                <p>DRAWPAL</p>
            </Background>
        </div>
    );
}

export default HeaderComponent;

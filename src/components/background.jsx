// add a simple background to components.

import React, { useEffect, useState } from "react";

import { linear_gradient, rgba_string } from "../util/css_help";

const Background = ({ children, red = 97, green = 23, blue = 99, alpha = 0.95, direction = 'column' }) => {
    const [grad, setGrad] = useState("");

    useEffect(() => {
        const first_color = rgba_string(red, green, blue, alpha);
        const second_color = rgba_string(red, green * 0.75, blue * 0.5, alpha);
        setGrad(linear_gradient(Math.floor(Math.random() * 180), first_color, second_color, 0));
    }, []);

    useEffect(() => {
        console.log(grad);
    }, [grad]);

    return (
        <div style={{
            margin: '10px',
            padding: '5px',
            borderRadius: '10px', 
            border: '2px dotted black',
            background: grad,

            backdropFilter: 'blur("10px")',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: direction,
        }}>
            {children}
        </div>
    );
}

export default Background;

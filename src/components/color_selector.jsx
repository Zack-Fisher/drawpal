import React from "react";
import ColorButton from "./color_button";
import { usePenContext } from "./state";

// just using css color names here, but hex codes like #ff0000 would work too
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'black',
    'white',
]

const ColorSelector = (props) => {
    // get the drawing context once, then pass it down to the children buttons through callback props.
    const {setColor} = usePenContext();

    return (
        <div style={{
            padding: '20px',
        }}>
            <p>color selector</p>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                {
                    colors.map((color) => {
                        return (
                            <ColorButton key={color} color={color} setParentColor={setColor} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ColorSelector;

import React, { useEffect } from "react";
import { usePenContext } from "./state";

import { PenShape } from "../../backend/src/constants";

const shape_to_unicode = (shape) => {
    switch (shape) {
        case PenShape.CIRCLE:
            return '○';
        case PenShape.SQUARE:
            return '■';
        case PenShape.TRIANGLE:
            return '△';
        case PenShape.DIAMOND:
            return '◇';
        case PenShape.STAR:
            return '★';
        case PenShape.HEART:
            return '♡';
        default:
            return '○';
    }
}

const ShapeButton = ({ shape, setShape }) => {
    const handle_click = () => {
        setShape(shape);
    }

    const {size} = usePenContext();
    let button_scale = '1.0';
    if (size)
    {
        let temp = size;
        temp = Math.pow(temp, 0.25);
        button_scale = temp.toString();
    } 

    // use the shape string when clicking the button.
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
            alignSelf: 'center',
            textAlign: 'center',
        }}>
            <button
                style={{
                    scale: button_scale,
                    backgroundColor: 'white',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    margin: '5px',
                }}
                onClick={handle_click}
            >
                {shape_to_unicode(shape)}
            </button>
        </div>
    );
}

export default ShapeButton;

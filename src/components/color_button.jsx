import React, {useEffect} from "react";

const ColorButton = ({ color, setParentColor }) => {
    const handleClick = () => {
        console.log("Color was set to " + color + ".")
        setParentColor(color);
    }

    return (
        <div style={{
        }}>
            <button
                style={{
                    backgroundColor: color,
                    width: '30px',
                    height: '20px',
                    margin: '3px',
                }}
                // pass the setter function here, so that passing the color makes sense.
                // everything should be passed DOWN, and happen in the children.
                onClick={handleClick}
            />
        </div>
    );
}

export default ColorButton;

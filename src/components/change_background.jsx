import React from "react";
import Background from "./background";

const ChangeBackground = ({setBackground}) => {
    const handle_file = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBackground(e.target.result);
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

    return (
        <Background>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <p>Change Background:</p>
                <input type="file" accept="image/*" onChange={handle_file} />
            </div>
        </Background>
    );
}

export default ChangeBackground;

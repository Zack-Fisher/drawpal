import React, { createContext, useContext } from "react";
import { useEffect, useState, useRef } from "react";
import ColorSelector from "./components/color_selector";

const DrawingComponent = (props) => {
    const [isDown, setIsDown] = useState(false);
    const [currPosition, setCurrPosition] = useState({ x: 0, y: 0 });

    const [currColor, setCurrColor] = useState('#000000');

    const canvasRef = useRef(null)

    const draw = (ctx, position) => {
        ctx.fillStyle = currColor;
        ctx.beginPath();
        ctx.arc(position.x, position.y, 10, 0, Math.PI * 2, true);
        ctx.fill();
    };

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const drawOnCanvas = () => {
            if (!isDown) return;

            draw(context, currPosition)
        }

        const handleDown = () => {
            setIsDown(true);
            drawOnCanvas();
        }

        const handleUp = () => {
            setIsDown(false);
        }

        const handleMouseMove = (event) => {
            let rect = canvas.getBoundingClientRect();

            setCurrPosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
            drawOnCanvas();
        }

        canvas.addEventListener('mousedown', handleDown)
        canvas.addEventListener('mouseup', handleUp)

        canvas.addEventListener('mousemove', handleMouseMove)

        return () => {
            // the unmount behavior
            canvas.removeEventListener('mousedown', handleDown)
            canvas.removeEventListener('mouseup', handleUp)

            canvas.removeEventListener('mousemove', drawOnCanvas)
        }
    }, [isDown, currPosition])

    return (
        <div>
            <div style={{
                display: 'flex',
            }}>
                <canvas style={{
                        border: '10px solid black'
                    }} ref={canvasRef} width={640} height={480} />
                <ColorSelector />
            </div>
        </div>
    );
}

export default DrawingComponent;

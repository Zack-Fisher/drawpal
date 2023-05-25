import React, { createContext, useContext } from "react";
import { useEffect, useState, useRef } from "react";
import ColorSelector from "./components/color_selector";
import { usePenContext } from "./components/state";
import ShapeSelector from "./components/shape_selector";
import SizeSelector from "./components/size_selector";
import Background from "./components/background";

const DrawingComponent = (props) => {
    const [isDown, setIsDown] = useState(false);
    const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
    const [currPosition, setCurrPosition] = useState({ x: 0, y: 0 });
    const ctx = useRef(null);

    const { color, size, shape } = usePenContext();

    const fill = (color) => {
        const c = ctx.current.getContext('2d');
        c.fillStyle = color;
        c.fillRect(0, 0, 640, 480);
    }

    const clear = () => {
        fill('#c0c0c0');
    }

    const save_canvas = () => {
        const canvas = ctx.current;

        // Create a data URL from the canvas contents
        const dataURL = canvas.toDataURL('image/png');

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'canvas-image.png'; // Specify the filename

        // Programmatically trigger a click event on the anchor element
        link.click();
    }

    useEffect(() => {
        clear();
    }, [ctx]);

    const draw = () => {
        if (!isDown) return;

        const c = ctx.current.getContext('2d');
        c.fillStyle = color;
        c.beginPath();
        c.arc(currPosition.x, currPosition.y, size, 0, Math.PI * 2, true);
        c.fill();
    };

    const handleDown = () => {
        setIsDown(true);

        draw();
    }

    const handleUp = () => {
        setIsDown(false);
    }

    const handleMouseMove = (event) => {
        let rect = ctx.current.getBoundingClientRect();

        setCurrPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });

        draw(event);
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <div style={{
                        height: '480px',
                        width: '640px',
                    }}>
                        <canvas
                            onMouseDown={handleDown}
                            onMouseUp={handleUp}
                            onMouseMove={handleMouseMove}
                            style={{
                                border: '10px solid black',
                                overflow: 'hidden',
                            }} ref={ctx} height={480} width={640} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '30px',
                    }}>
                        <button onClick={clear}>
                            Clear
                        </button>
                        <button style={{
                            marginLeft: '30px',
                        }} onClick={save_canvas}>
                            Download
                        </button>
                    </div>
                </div>
                <div style={{
                    padding: '40px',
                }}>
                    <Background red={93} alpha={0.8}>
                        <Background>
                            <div>
                                <ColorSelector />
                            </div>
                        </Background>
                        <Background red={195}>
                            <div style={{
                                marginTop: '20px',
                                marginLeft: '30px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <div>
                                    <ShapeSelector />
                                </div>
                                <div style={{
                                    marginLeft: '30px',
                                }}>
                                    <SizeSelector />
                                </div>
                            </div>
                        </Background>
                    </Background>
                </div>
            </div>
        </div>
    );
}

export default DrawingComponent;

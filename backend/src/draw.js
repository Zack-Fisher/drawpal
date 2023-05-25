import { Canvas } from "./constants"

export const handle_draw = (wss, ws, data) => {
    let handles = true;

    switch (data.type) {
        case Canvas.DRAW:
            break;
        default:
            handles = false;
            console.log('unknown message type: ', data.type);
    }

    return handles;
}

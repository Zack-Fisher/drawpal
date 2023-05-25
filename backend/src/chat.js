import { Chat } from "./constants";

// the data has already been transformed into a json object (or errored).
export const handle_chat = (wss, ws, data) => {
    let handles = true;

    switch (data.type) {
        case Chat.CONNECTED:
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(
                        { type: 'position', data: canvasPosition }
                    ));
                }
            });
            break;
        case Chat.SEND:
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(
                        { type: 'position', data: canvasPosition }
                    ));
                }
            });
            break;
        default:
            handles = false;
            console.log('unknown message type: ', data.type);
            break;
    }

    return handles;
}

import { Data, User } from "./constants"
const {v4: uuidv4} = require('uuid');

export let client_data = new Map();

export const handle_client_data = (wss, ws, data) => {
    let handles = true;

    switch (data.type) {
        case Data.LOGIN:
            client_data.set(ws.id, User.fromJson(data))
            break;
        case Data.SET_NAME:
            client_data.get(ws.id).name = data.name;
            break;
        case Data.SET_AVATAR:
            break;
        case Data.SET_PASSWORD:
            break;
        default:
            handles = false;
            console.log('unknown message type: ', data.type);
    }

    return handles;
}
/// use this file as a common header for the api, this is stuff that the frontend can also include.

// general constant-type stuff.
const PORT = 3002

// needs to be easily serializable to json.
// this is passed around the socket constantly, only as a json object.
export class User {
    static DEFAULT_NAME() {return "Joe"}
    static DEFAULT_COLOR() {return "#BADA55"}

    constructor(name, color) {
        this.name = name
        this.color = color
    }

    jsonify() {
        return {
            name: this.name,
            color: this.color,
        }
    }

    static fromJson(json) {
        if (!json.name) {
            json.name = User.DEFAULT_NAME()
        }

        if (!json.color) {
            json.color = User.DEFAULT_COLOR()
        }

        return new User(json.name, json.color);
    }
}

// all the message type exports.
export { Chat, Canvas, Data }

//// DEFINE TYPES
// define the ws protocol for chatting.
const Chat = {
    CONNECTED: 'connected',
    SEND: 'send',
}

// define the ws messaging protocol for the drawing feature.
const Canvas = {
    DRAW: 'draw',
}

// for user data communications, eg username, password, avatar, ...
const Data = {
    LOGIN: 'login',
    SET_NAME: 'set_name',
    SET_AVATAR: 'set_avatar',
    SET_PASSWORD: 'set_password',
}

//// END DEFINE TYPES

//// DEFINE CONSTRUCTORS

export const BuildLogin = (name) => {
    return {
        type: Data.LOGIN,
        data: name,
    }
}

// define the constructor for the chat message.
export const BuildMessage = (message) => {
    return {
        // the type is the enum value.
        type: Chat.SEND,
        // just send a raw message.
        data: message,
    }
}

//// END DEFINE CONSTRUCTORS

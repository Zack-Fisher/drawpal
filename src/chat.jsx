import React, { useState } from "react";
import UserList from "./components/user_list";
import { useMessageContext, useUserContext } from "./components/state";
import { useWebSocketContext } from "./components/websocket";

import * as C from "../backend/src/constants";
import Background from "./components/background";

const ChatComponent = (props) => {
    // the state the chat has access to
    const {users} = useUserContext();
    const {messages} = useMessageContext();
    const {sendSocket} = useWebSocketContext();

    // the message the user types
    const [message, setMessage] = useState("");

    const onSendMessage = () => {
        if (message !== "")
        {
            sendSocket(C.BuildMessage(message));
            setMessage("");
        }
    };

    return (
        <div>
            <Background>
                <p>chat</p>

                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button onClick={onSendMessage}>
                    Send Message
                </button>

                <div>
                    {messages.map((message, index) =>
                        <p key={index}>{message}</p>
                    )}
                </div>
            </Background>

            <UserList users={users} />
        </div>
    );
}

export default ChatComponent;

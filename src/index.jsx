import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";

import { MessageProvider, PenProvider, UserProvider } from "./components/state";

import { WebSocketProvider } from "./components/websocket";

createRoot(document.getElementById("root")).render(
    // hook into the server's state with a websocket context.
    // the websocket is the only one that's really special here, since it's updating the state from server messages directly.
    // the websocket provides a function to write to the socket, but it also writes state from socket messages.
    // in this way it's kind of like middleware.
    <MessageProvider>
    <UserProvider>
    <PenProvider>
        <WebSocketProvider>
            <App />
        </WebSocketProvider>
    </PenProvider>
    </UserProvider>
    </MessageProvider>
);

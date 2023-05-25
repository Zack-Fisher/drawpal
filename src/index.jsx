import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";

import { WebSocketProvider, ColorProvider, MessageProvider, UserProvider } from "./components/state";

createRoot(document.getElementById("root")).render(
    // in no particular order, we wrap the app in the providers.
    <WebSocketProvider>
    <ColorProvider>
    <MessageProvider>
    <UserProvider>

        <App />

    </UserProvider>
    </MessageProvider>
    </ColorProvider>
    </WebSocketProvider>
);

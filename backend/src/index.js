// app.js
const express = require('express');
const WebSocket = require('ws');

const {v4: uuidv4} = require('uuid');

const app = express();
const server = app.listen(3002, () => {
  console.log('Server is running on port 3000');
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

import { handle_chat } from './chat';
import { handle_client_data, client_data } from './client_data';
import { handle_draw } from './draw';

const line = () => {
    console.log("--------------------------------------------------")
}

const print_account = (ws) => {
    console.log("id: ", ws.id)
    console.log("user: ", client_data.get(ws.id))
}

// WebSocket server logic
wss.on('connection', (ws) => {
    // generate a unique id for the ws.
    // only called once per connection, so this is unique and never re-genned.
    let client_id = uuidv4();
    ws.id = client_id;

    ws.on('open', function open() {
        line();
        print_account(ws);
        console.log('connected');
        line();
    });

    ws.on('close', function close() {
        line();
        print_account(ws);
        console.log('disconnected');
        line();
    });

    ws.on('error', function error(err) {
        line();
        print_account(ws);
        console.log('error: ', err);
        line();
    });

    ws.on('message', function incoming(data) {
        line();
        print_account(ws);
        console.log('received: %s', data);
        line();

        try {
            const jsonData = JSON.parse(data);
            
            // define and use the message handlers for the specific features.
            if (handle_client_data(wss, ws, jsonData)) {return;}
            if (handle_chat(wss, ws, jsonData)) {return;}
            if (handle_draw(wss, ws, jsonData)) {return;}
        }
        catch (e) {
            console.log('Error parsing JSON, probably invalid message: ', e);
        }
    });
});

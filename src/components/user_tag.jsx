// render a user data structure.

import React from 'react';

// this takes in a User from the constants file.
const UserTag = ({user_data}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            backgroundColor: user_data.color,
        }}>
            <p>{user_data.name}</p>
        </div>
    )
}


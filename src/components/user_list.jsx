import React from 'react';

// pass in from the chat component. the chat needs access to this state anyway.
const UserList = ({users}) => {
    if (!users) {
        return null;
    }

    return (
        <div>
            <ul>
                {users.map(user => <li key={user.name}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default UserList;

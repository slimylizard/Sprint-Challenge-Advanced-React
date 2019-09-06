import React from 'react';

function UserCard (props) {
    return(
        <div className='CardList'>
            {props.user.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.country}</p>
                    <p>{user.searches}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard;
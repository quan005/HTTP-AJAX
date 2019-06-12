import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    marigin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    background:transparent;
    cursor: pointer;
`;

const FriendsList = props => {

    return(
        <ListItem>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <Button id={props.id} onClick={props.delete}>X</Button>
        </ListItem>
    );
};

export default FriendsList;
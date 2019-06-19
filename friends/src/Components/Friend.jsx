import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    padding: 10px;
    border: none;
    background:transparent;
    border-radius: 10px;
    cursor: pointer;

    ${props => (props.type === 'update' ? 
        `
            background: #2ecc71;
            margin-bottom: 10px;
            color: white;  
        `
      :
        null
    )}

    ${props => (props.type === 'delete' ? 
        `
            background: #e74c3c;
            color: white; 
        `
      :
        null
    )}
`;

const Friend = props => {

    return(
        <div className={props.showUpdate === true ? 'hidden' : 'friend-list-Container'}>
            <h3>{props.name}</h3>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Email:</strong> {props.email}</p>

            <div className="button-container">
                <Button type='update' id={props.id} onClick={props.update}>Update Friend</Button>
                <Button type='delete' id={props.id} onClick={props.delete}>Delete Friend</Button>
            </div>
        </div>
    );
};

export default Friend;
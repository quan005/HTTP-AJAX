import React from 'react';
import styled from 'styled-components';

import Friend from './Friend';
import UpdateForm from './UpdateForm';


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background: #FFF;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  padding: 5px 0 25px 0;

  ${props => (props.type <= 2 ? 
    `
        width: 47%;  
    `
  :
    null
  )}

  ${props => (props.type >= 3 ? 
    `
        width: 32.5%;  
    `
  :
    null
  )}
`;


class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate:false
        }
    }

    showUpdateForm = event => {
        event.preventDefault();
        this.setState({showUpdate: true})
    }

    cancelUpdateForm = event => {
        event.preventDefault();
        this.setState({showUpdate: false})
    }

    render() {
        return (
            <CardContainer type={this.props.friends.length}>
                <Friend
                    name={this.props.name}
                    age={this.props.age}
                    email={this.props.email}
                    id={this.props.id}
                    key={this.props.id}
                    delete={this.props.delete}
                    update={this.showUpdateForm}
                    showUpdate={this.state.showUpdate}
                />

                <UpdateForm
                    name={this.props.name}
                    age={this.props.age}
                    email={this.props.email}
                    id={this.props.id}
                    friendUpdated={this.props.friendUpdated}
                    cancel={this.cancelUpdateForm}
                    showUpdate={this.state.showUpdate}
                 />
            </CardContainer>
        );
    }
}

export default FriendCard;
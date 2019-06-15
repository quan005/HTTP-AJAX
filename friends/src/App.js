import React, { Component } from 'react';
import axios from "axios";

import FriendCard from './Components/FriendCard';
import Form from './Components/Form';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      data: false,
      hide: true,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data});
        this.setState({data: true})
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  addFriend = friend => {
    axios.post("http://localhost:5000/friends", friend)
      .then(response => {
        const myNewFriend = this.state.friends;
        myNewFriend.push(friend);
        this.setState({friends: myNewFriend});
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  deleteFriend = event => {
    axios.delete(`http://localhost:5000/friends/${event.target.id}`)
      .then(response => {
        console.log(response)
        this.setState({friends: response.data});
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  friendUpdated = (updatedData) => {
    this.setState({friends: updatedData});
  }

  hide = event => {
    event.preventDefault();
    this.setState({hide: false})
  }

  render() {

    const friendsData = this.state.friends.map(friend =>(
      <FriendCard
         age={friend.age}
         email={friend.email}
         name={friend.name}
         id={friend.id}
         key={friend.id}
         friends={this.state.friends}
         delete={this.deleteFriend}
         friendUpdated={this.friendUpdated}
      />
    ))

    if (this.state.data === false){
      return null;
    }

    return(

      <div className="container">
          <h1>My Friends List</h1>
            
          <section className="friends-section">
            {friendsData}
          </section>

          <section className="add-friend-section">
            <Form
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              addFriend={this.addFriend}
              hide={this.state.hide}
              id={this.state.friends.length + 1}
            />
          </section>

          <div className={this.state.hide === false ? 'hidden' : 'add-btn'}>
            <button className="contact100-form-btn" onClick={this.hide} >
                Add Friend
            </button>
          </div>
      </div>

    );
  }
};

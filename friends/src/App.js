import React, { Component } from 'react';
import axios from "axios";
import FriendsList from './Components/FriendsList';
import './App.css';
import Form from './Components/Form';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      data: false,
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

  render() {

    const friendsData = this.state.friends.map(friend =>(
      <FriendsList
         age={friend.age}
         email={friend.email}
         name={friend.name}
         id={friend.id}
         key={friend.id}
         delete={this.deleteFriend}
      />
    ))

    if (this.state.data === false){
      return null;
    }

    return(

      <div>
          <h1>My Friends List</h1>

          <div>
              <label htmlFor="name">Name</label>
              <label htmlFor="age">Age</label>
              <label htmlFor="email">Email</label>
          </div>

          <div>
              <ul>
                {friendsData}
              </ul>
          </div>

          <Form
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
            addFriend={this.addFriend}
            id={this.state.friends.length + 1}
          />
      </div>

    );
  }
};

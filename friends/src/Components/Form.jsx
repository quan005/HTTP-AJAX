import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: '',
            }
        }
    }

    Friend = event => {
        event.preventDefault();
        this.props.addFriend(this.state.friend);
        this.setState({friend: {name: '', age: '', email: ''}})
    }

    inputHandler = event => {
        event.preventDefault();
        this.setState({friend: { ...this.state.friend, 
            [event.target.name]: event.target.value}})
    }

    render() {

        return(
            <div className="form-container">
                <form onSubmit={this.Friend}>
                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your Name</span>
                        <input className="input100" type="text" name="name" value={this.state.friend.name} onChange={this.inputHandler} placeholder="Enter your name" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your Age</span>
                        <input className="input100" type="number" name="age" value={this.state.friend.age} onChange={this.inputHandler} placeholder="Enter your age" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your Email</span>
                        <input className="input100" type="email" name="email" value={this.state.friend.email} onChange={this.inputHandler} placeholder="Enter your email addess" />
                        <span className="focus-input100"></span>
                    </div>

                    <input className="hidden" readOnly value={this.props.id} type="number"/>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" type="submit">
                            Add Friend
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Form;
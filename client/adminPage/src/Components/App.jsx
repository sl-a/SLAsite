import React, { Component } from 'react';
import AddCandidate from './AddCandidate.jsx';
import FetchEmails from './FetchEmails.jsx';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            loggedIn : false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput (e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin (e) {
        e.preventDefault();
        axios
            .post('/api/admin/login', {password: this.state.password})
            .then(() => {
                this.setState({
                    loggedIn: true
                })
            })
            .catch(() => {
                window.alert('Password incorrect');
            })
    }

    render () {
        return (
            <div>
                {this.state.loggedIn ? 
                    <div>
                        <AddCandidate />
                        <FetchEmails />
                    </div>
                    :
                    <div>
                        <input type='password' placeholder='Enter password' onChange={this.handleInput} ></input>
                        <button onClick={this.handleLogin}>Login to admin panel</button>
                    </div>
                }
            </div>
        )
    }
}
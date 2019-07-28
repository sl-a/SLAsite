import React, { Component } from 'react';
import axios from 'axios';
import EmailList from './EmailList.jsx';

export default class FetchEmails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: []
        }
        this.getEmails = this.getEmails.bind(this);
    }

    getEmails () {
        axios
            .get('/api/emails')
            .then(data => {
                this.setState({
                    addresses: data.data
                })
            })
            .catch(err => console.error(err));
    }

    render () {
        return (
            <div>
                hello from emails
                <button onClick={this.getEmails}>Retrieve email information</button>
                {this.state.addresses.length ? <EmailList emailData={this.state.addresses} /> : null}
            </div>
        )
    }
}
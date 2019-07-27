import React, { Component } from 'react';
import axios from 'axios';

export default class FetchEmails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: []
        }
        this.getEmails = this.getEmails.bind(this);
    }

    componentDidMount () {
        this.getEmails()
    }

    getEmails () {
        axios
            .get('/api/emails')
            .then(data => {
                this.setState({
                    addresses: data.data
                }, () => console.log(this.state.addresses))
            })
            .catch(err => console.error(err));
    }

    render () {
        return (
            <div>
                hello from emails
            </div>
        )
    }
}
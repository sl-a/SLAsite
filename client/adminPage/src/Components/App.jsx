import React, { Component } from 'react';
import AddCandidate from './AddCandidate.jsx';
import FetchEmails from './FetchEmails.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <AddCandidate />
                <FetchEmails />
            </div>
        )
    }
}
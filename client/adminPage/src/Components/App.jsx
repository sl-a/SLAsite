import React, { Component } from 'react';
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
                add candidate
                <FetchEmails />
            </div>
        )
    }
}
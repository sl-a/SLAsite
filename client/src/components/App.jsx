import React, { Component } from 'react';
import Contact from './ContactForm.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                hello from app
                <Contact />
            </div>
        )
    }
}
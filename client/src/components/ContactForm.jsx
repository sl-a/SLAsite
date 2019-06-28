import React, { Component } from 'react';
import ContactInput from './ContactInput.jsx';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: ['Name', 'Email', 'Message'],
            name: '',
            email: '',
            text: '',
            allowContact: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
    }

    handleChange (e) {
        let property = e.target.id;
        this.setState({
            [property]: e.target.value
        })
    }

    toggleCheck () {
        this.setState(currState => {
            return {allowContact: !currState.allowContact}
        }, () => console.log(this.state.allowContact))
    }

    render () {
        return (
            <div>
                {this.state.fields.map((item, index) => {
                    return (<ContactInput key={index} field={item} handleChange={this.handleChange} />)
                })}
                <input type='checkbox' onClick={this.toggleCheck}></input> Do not add me to SL+A's mailing list
            </div>
        )
    }
}
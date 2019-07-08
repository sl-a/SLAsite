import React, { Component } from 'react';
import ContactInput from './ContactInput.jsx';
import axios from 'axios';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: ['Name', 'Email', 'Subject', 'Message'],
            name: '',
            email: '',
            subject: '',
            message: '',
            allowContact: true,
            sent: false,
            failed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //updates state to track information typed in input fields
    handleChange (e) {
        let property = e.target.id;
        this.setState({
            [property]: e.target.value
        })
    }

    //updates state about whether the user wishes to allow contact
    toggleCheck () {
        this.setState(currState => {
            return {allowContact: !currState.allowContact}
        })
    }

    //sends request to server to send email
    handleSubmit () {
        let { name, email, subject, message, allowContact } = this.state
        axios
            .post('/api/contact', { name, email, subject, message, allowContact })
            .then(() => 
                this.setState({
                    sent: true
                }))
            .catch(err => console.error(err))
    }

    render () {
        return (
            <div>
                Contact us:
                {this.state.fields.map((item, index) => {
                    return (<ContactInput key={index} field={item} handleChange={this.handleChange} />)
                })}
                <input type='checkbox' onClick={this.toggleCheck}></input> Do not add me to SL+A's mailing list
                <br/>
                <button onClick={this.handleSubmit}>Send Email</button>
                {this.state.sent ? <div>Email sent</div> : null}
            </div>
        )
    }
}
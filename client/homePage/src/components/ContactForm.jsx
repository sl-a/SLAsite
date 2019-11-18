import React, { Component } from 'react';
import ContactInput         from './ContactInput.jsx';
import axios                from 'axios';
import Checkbox             from '@material-ui/core/Checkbox';
import Button               from '@material-ui/core/Button';
import emailChecker         from 'email-validator';

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
            failed: false,
            canSend: false
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
        }, () => {
            let { name, email, subject, message } = this.state
            if (name && emailChecker.validate(email) && subject && message) {
                this.setState({
                    canSend: true
                })
            }
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
            <div id='contactForm'>
                <div className='contactSpacer'></div>
                <div className='contactSpacer'></div>
                Contact us:
                {this.state.fields.map((item, index) => {
                    return (<ContactInput key={index} field={item} handleChange={this.handleChange} />)
                })}
                <div className='contactSpacer'></div>
                <Checkbox color='default' checked={this.state.allowContact} onClick={this.toggleCheck}></Checkbox> Do not add me to SL+A's mailing list
                <br/>
                <div className='contactSpacer'></div>
                {this.state.canSend ?
                    <Button variant='contained' onClick={this.handleSubmit}>Send Email</Button> :
                    <Button variant='contained' disabled>Send Email</Button>
                }
                {this.state.sent ? <div>Email sent</div> : null}
            </div>
        )
    }
}
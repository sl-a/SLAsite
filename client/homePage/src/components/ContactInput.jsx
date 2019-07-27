import React from 'react';

const ContactInput = (props) => {
    return (
        <div>
            <input type='text' placeholder={props.field} onChange={props.handleChange} id={props.field.toLowerCase()}></input>
            <br/>
        </div>
    )
}

export default ContactInput
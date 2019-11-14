import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactInput = (props) => {
    return (
        <div>
            <TextField label={props.field} onChange={props.handleChange} id={props.field.toLowerCase()}></TextField>
            <br/>
        </div>
    )
}

export default ContactInput
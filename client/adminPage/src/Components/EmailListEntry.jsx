import React from 'react';

const EmailListEntry = (props) => {
    return (
        <li>
            {props.email.name + '  |  ' + props.email.email}
        </li>
    )
}

export default EmailListEntry;
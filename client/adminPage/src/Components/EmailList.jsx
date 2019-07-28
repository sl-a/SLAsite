import React from 'react';
import EmailListEntry from './EmailListEntry.jsx';

const EmailList = (props) => {
    return (
        <ul>
            {props.emailData.map((item, index) => {
                return <EmailListEntry email={item} key={index} />
            })}
        </ul>
    )
}

export default EmailList;
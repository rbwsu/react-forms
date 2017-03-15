import React from 'react';
import TextInput from './TextInput';
import PhoneNumber from './PhoneNumber.js';
import EmailInput from './EmailInput.js';

class Form extends React.Component {
    render() {
        return (
            <div>
                <TextInput id="first" label="First Name" />
                <TextInput id="last" label="Last Name" />
                <PhoneNumber phoneType="Home" />
                <PhoneNumber phoneType="Work" />
                <PhoneNumber phoneType="Cell" />
                <EmailInput />
                <TextInput id="address" label="Address" />
            </div>
        )
    }
}

export default Form;
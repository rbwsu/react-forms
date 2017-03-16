import React from 'react';

import TextInput from './TextInput';
import PhoneNumber from './PhoneNumber.js';
import EmailInput from './EmailInput.js';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        if (document.getElementsByClassName("errorText show").length > 0) {
            console.error("Form Validation Failed");
        } else {
            console.log("Form Validation passed");
        }
    }

    render() {
        return (
            <div className="form">
                <div className="nameInput">
                <TextInput id="first" label="First Name" />
                <TextInput id="last" label="Last Name" />
                </div>
                <PhoneNumber phoneType="Main" />
                <EmailInput />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;
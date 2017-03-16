import React from 'react';
import validator from 'validator';

class EmailInput extends React.Component{
        constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: ''
        };
    }

    onBlur(event) {
        if (!validator.isEmail(event.target.value)) {
            this.setState({
                errorText: "Must be valid email",
                errorVisibility: "show"
            })
        } else {
            this.setState({
                errorVisibility: "hidden"
            })
        }
        this.setState({
            value: event.target.value
        });
    }

    render() {
        let classList = "errorText " + this.state.errorVisibility
        return (
            <div className="inputDiv">
                <label>Email: </label>
                <input type="email" id="email" onBlur={this.onBlur} />
                <span className={classList}>{this.state.errorText}</span>
            </div>
        )
    }
}

export default EmailInput;
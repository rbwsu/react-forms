import React from 'react';
import validator from 'validator';

class PhoneNumber extends React.Component{
    constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: ''
        };
    }
    onBlur(event) {
        if (!validator.isMobilePhone(event.target.value,'en-US')) {
            this.setState({
                errorText: "Must be phone number",
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
            <label>{this.props.phoneType} Phone: (ex: 1112223333) </label>
            <input type="tel" onBlur={this.onBlur} />
            <span className={classList}>{this.state.errorText}</span>
        </div>
        )
    }
}

export default PhoneNumber;
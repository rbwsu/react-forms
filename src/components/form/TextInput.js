import React from 'react';
import validator from 'validator';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: ''
        };
    }

    onBlur(event) {
        if (validator.isEmpty(event.target.value)) {
            this.setState({
                errorText: "Required",
                errorVisibility: "show"
            })
        } else if (!validator.isAlpha(event.target.value)) {
            this.setState({
                errorText: "Cannot container numbers",
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
                <label>{this.props.label}: </label>
                <input id={this.props.id} type="text" onBlur={this.onBlur} />
                <span className={classList}>{this.state.errorText}</span>
            </div>
        )
    }
}

export default TextInput;
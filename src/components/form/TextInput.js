import React from 'react';
import Validation from 'react-validation';

class TextInput extends React.Component{
    render() {
        return (
            <div>
                {/*<input id={this.props.id} type="text"/>*/}
                <Validation.components.Input
                    type="text"
                    id={this.props.id}
                    name={this.props.id}
                    validations={['required','alpha']}
                />
                <label for={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}

export default TextInput;
import React from 'react';

class EmailInput extends React.Component{
    render() {
        return (
            <div>
                <input type="email" id="email" />
                <label>Email</label>
            </div>
        )
    }
}

export default EmailInput;
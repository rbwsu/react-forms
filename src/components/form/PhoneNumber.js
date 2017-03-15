import React from 'react';

class PhoneNumber extends React.Component{
    render() {
        return (
        <div>
            <span>(</span>
            <input id="areaCode" type="number" />
            <span>) </span>
            <input id="localCode" type="number" />
            <span> - </span>
            <input type="number" />
            <span className="phoneNumberLabel">{this.props.phoneType} Phone</span>
        </div>
        )
    }
}

export default PhoneNumber;
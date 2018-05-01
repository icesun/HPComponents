import React from 'react'

export default class DBButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('DBButton props', this.props);
        var meta = this.props.meta;
        var data = this.props.data;
        
        var disabled = '';
        if(data.dbAttempt.attempt_json == JSON.stringify(data.inputAttempt))  {
              disabled = 'disabled';
        }

        return(<button className={meta.classes} onClick={this.props.handleClick} disabled={disabled}>{meta.value}</button>);
    }

}
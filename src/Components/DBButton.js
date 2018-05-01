import React from 'react'

export default class DBButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('DBButton props', this.props);
        var disabled = '';

        var meta = this.props.meta;

        return(<button className={meta.classes} onClick={this.props.handleClick} disabled={disabled}>{meta.value}</button>);
    }

}
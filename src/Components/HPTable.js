import React from 'react'

import HPText from './HPText'
import HPTextarea from './HPTextarea'

import { createKey } from './Tools'

export default class HPTable extends React.Component {
    constructor(props) {
        super(props);

        this.createTR = this.createTR.bind(this);
        this.createTD = this.createTD.bind(this);
        this.createEmbeded = this.createEmbeded.bind(this);
    }

    createEmbeded(meta, i, prefix) {
        var key = createKey(meta, i, prefix);

        switch(meta.type) {
            case 'HPText':
                return (
                    <HPText key={key} meta={meta} />
                );

            case 'HPTextarea':
                return (
                    <HPTextarea key={key} meta={meta} data={this.props.data} handleChange={this.props.handleChange}/>
                );
        }

        return (
            <div className="other_embeded"></div>
        );
    }


    createTD(meta, i, prefix) {
        var key = createKey(meta, i, prefix);

        var tdContent = '';

        switch(meta.type) {
            case 'EmbededTD':
                tdContent = meta.embeded_arr.map((x, i) => {
                    return this.createEmbeded(x, i, key);
                });
            break;
        }

        return (<td key={key} className={meta.classes}>{tdContent}</td>);

    }


    createTR(meta, i, prefix) {
        var key = createKey(meta, i, prefix);

        var tdArray = meta.td_arr.map((x, i) => {
            return this.createTD(x, i, key);
        });

        return (
            <tr key={key} className={meta.classes}>{tdArray}</tr>
        );
    }


    render() {
        console.log('HPTable', this.props);
        var meta = this.props.meta;
        var data = this.props.data;
        var key = createKey(meta);
        console.log('key', key);

        var trArray = meta.tr_arr.map((x, i) => {
            return this.createTR(x, i, key); 
        });






        return (
            <div className={meta.div_classes}>
                <table className={meta.classes}>
                    <tbody>
                       {trArray}
                    </tbody>
                </table>
            </div>
        );
    }

}
import React from 'react'

import HPText from './HPText'
import HPTextarea from './HPTextarea'
import HPList from './HPList';
import { tableWidths } from '../data/PDFStyles'

import { createKey } from './Tools'

export default class HPTable extends React.Component {
    constructor(props) {
        super(props);

        this.createTR = this.createTR.bind(this);
        this.createTD = this.createTD.bind(this);
        this.createEmbeded = this.createEmbeded.bind(this);
    }

    static printPDF(component, data) {
        console.log('HPTable printPDF', component, data);
        var output = {};

        // bodyPDF is an array of trPDF
        var bodyPDF = component.tr_arr.map((x, i) => {
            return HPTable.printPDF_tr(x, i, data);
        });

        output.body = bodyPDF;
        if(component.pdf_width) {
	        output.widths = tableWidths[component.pdf_width];
        }

        return {
            style: component.pdf_style,
            table: output
        }        
    }

    static printPDF_tr(component, i, data) {
        console.log('print tr', component, i, data);

        // trPDF is an array of tdPDF
        var trPDF = [];
        for(let i=0; i<component.td_arr.length; i++ ) {
            //console.log(i, component.td_arr[i]);
            var tdPDF = this.printPDF_td(component.td_arr[i], i, data);
            var colspan = 1;
            /* add colSpan attribute if colspan more than 1 */
            if(component.td_arr[i].colspan && component.td_arr[i].colspan > 1) {
                colspan = component.td_arr[i].colspan;
                tdPDF['colSpan'] = colspan;
                //console.log('colspan', i, colspan, trPDF[i]);
            }
            trPDF.push(tdPDF);
            /* push empty tdPDF {} if the previous td occupy more than one col */ 
            for(let j=0; j<colspan-1; j++) {
                console.log('push empty td');
                trPDF.push({});
            }
        }

        return trPDF;
    }

    static printPDF_td(component, i, data) {
        console.log('print td', component, i, data);

        var tdPDF = '';

        // tdPDF can be an array or an object or a text
        switch(component.type) {
            case 'EmbededTD':
                tdPDF = component.embeded_arr.map((x, i) => {
                    return HPTable.printPDF_embeded(x, i, data);
                });
                /* text remove inside pdf_style of space such as margin. so I use 'stack' here.  */
                return {stack: tdPDF, style: component.pdf_style};

            case 'TextTD':
                return {text: component.text, style: component.pdf_style}


        }

    }

    static printPDF_embeded(component, i, data) {
        console.log('print embeded', component, i, data);

        switch(component.type) {
            case 'HPText':
                return HPText.printPDF(component);

            case 'HPTextarea':
                return HPTextarea.printPDF(component, data);

            case 'HPList':
                return HPList.printPDF(component);

        }

        return '';
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

            case 'HPList':
                return (
                    <HPList key={key} meta={meta} prefix={key} />
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

            case 'TextTD':
                tdContent = meta.text;
            break;
        }

        return (<td key={key} className={meta.classes} colSpan={meta.colspan}>{tdContent}</td>);

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
import React from 'react'

import HPText from './HPText'

import HPTextarea from './HPTextarea';
import HPTable from './HPTable';

function nameDatetime(prefix) {

    var now = new Date();
    var nowString = now.getFullYear() + '-' + now.getMonth() + '-' +  now.getDate() + '-' + now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds();

    console.log('name', nowString);

    return prefix + '_' + nowString;
}

const courseName ='test_course';

export default class PDFButton extends React.Component {
    constructor(props) {
        super(props);


        this.handleClick = this.handleClick.bind(this);
    }




    handleClick(e) {
        console.log('PDFButton Clicked', e, this.props);
        this.setState({comment: 'xxxx'});

        var components = this.props.components;
        var data = this.props.data;

        var docDefinition = {};

        var pdfContent = components.map(component => {

            switch(component.type) {
                case 'HPText':
                    return HPText.printPDF(component);

                case 'HPTextarea':
                    return HPTextarea.printPDF(component, data);

                case 'HPTable':
                    return HPTable.printPDF(component, data);
                    //return '';

                default:
                    return '';
            }

        });

        //console.log('pdfContent', pdfContent);

        docDefinition['content'] = pdfContent;
        docDefinition['styles'] = this.props.pdfstyles;

        docDefinition['footer'] = function(currentPage, pageCount) {
            var columns = [];
            var d = new Date();
            columns.push(d.toString());
            columns.push({text: currentPage, alignment: 'right'});

            return {columns: columns};
        }
        
        console.log('docDef', docDefinition);

        var filename = nameDatetime(courseName) + '.pdf';
        pdfMake.createPdf(docDefinition).download(filename);

    }







    render() {
        console.log('PDFButton props', this.props, this.state);
        var disabled = '';

        var meta = this.props.meta;

        return (<button className={meta.classes} onClick={this.handleClick} disabled={disabled}>{meta.value}</button>);
    }
}
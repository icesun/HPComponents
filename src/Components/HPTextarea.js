import React from 'react'

import HPText from './HPText'

import { createKey } from './Tools'

export default class HPTextarea extends React.Component {

    static printPDF(component, data) {
        var output = [];

        if(component.extra) {
            switch(component.extra.type) {
                case 'HPText':
                    output.push(HPText.printPDF(component.extra));
                break;
            }
        }

        var bodyId = component.body.id;
        var bodyText = '';
        if(data[bodyId]) {
            bodyText = data[bodyId];
        }
        output.push({
            style: component.body.pdf_style,
            table: {
                widths: component.body.pdf_width,
                body: [
                    [bodyText + '\n\n'],
                ]
            }
        });

        return output;
    }



    render() {

        console.log('HPTextarea prop', this.props);

        var extra_div = '';
        var meta = this.props.meta;
        var data = this.props.data;

        // Render extra
        if(meta.extra) {
            switch(meta.extra.type) {
                case 'HPText':
                  extra_div = <HPText meta={meta.extra} />
                break;
            }
        }

        // Render Textarea body
        var bodyId = meta.body.id;
        var bodyText = '';
        data[bodyId] ? bodyText = data[bodyId] : bodyText = meta.body.default_text;
        var bodyTextarea = <textarea className={meta.body.classes}  onChange={this.props.handleChange} value={bodyText} data-key={bodyId} />


        return (
            <div className={meta.classes}>
                {extra_div}
                {bodyTextarea}
            </div>
        );
    }

}
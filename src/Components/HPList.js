import React from 'react'
import { createKey } from './Tools'

export default class HPList extends React.Component {

    static printPDF(component) {
        var output = {};
        if(component.pdf_type) {
            output['type'] = component.pdf_type;
        }
        if(component.pdf_style) {
            output['style'] = component.pdf_style;
        }
        output[component.tag] = component.list.slice();

        return output;
    }


    render() {
        console.log('HPList', this.props);

        var meta = this.props.meta;
        var Tag = meta.tag;
        var prefix = 'HPList';
        if(meta.id) {
            prefix = meta.id;
        }
        else if(this.props.prefix) {
            prefix = this.props.prefix;
        }
        console.log('prefix', prefix);
    

        var listArray = meta.list.map((x, i) => {
            var key = createKey(x, i, prefix);

            return (
                <li key={key}>{x}</li>
            )
        });

        return (
            <div className={meta.div_classes}>
                <Tag className={meta.classes}>
                    {listArray}
                </Tag>
            </div>
        );
    }
}
import React from "react"

import { createKey } from './Tools'



export default class HPText extends React.Component {

    static printPDF(component) {

        var pdf = component.text_arr.map(item => {
            //console.log('item', item);
            if(item.pdf_style != 'none') {
                return {text: item.text, style: item.pdf_style}
            }
            else {
                return '';
            }
        });

        //console.log('pdf', pdf);
        return {text: pdf, style: component.pdf_style};
    }

    render() {
        console.log('HPText prop', this.props);
        var textArr = this.props.meta.text_arr;

        var renderTextArr = textArr.map((component, i) => {
            var key = createKey(component, i);

            switch(component.type) {
                case 'p':
                    return (<p key={key} className={component.classes}>{component.text}</p>);
                
                case 'span':
                    return (<span key={key} className={component.classes}>{component.text}</span>);

                case 'html':
                    return (<div key={key} className={component.classes} dangerouslySetInnerHTML={{__html: component.html}}></div>);
            }

        });


        return (<div>{renderTextArr}</div>);
    }


}
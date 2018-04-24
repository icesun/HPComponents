import React from "react"
import uuid from "uuid"

//import { attemptTable, client } from "../index"
//import { components, components_pdfstyles } from '../data/ComponentData'
import { components } from '../data/ComponentData'


import RenderComponents from "./RenderComponents"
import PDFButton from "./PDFButton"

const PDFButtonMeta = {
    classes: 'btn btn-primary',
    value: 'Download PDF',
}


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.dbAttempt = props.dbAttempt;
        props.dbAttempt.attempt_json ? this.state.inputAttempt = JSON.parse(props.dbAttempt.attempt_json) : this.state.inputAttempt = {};
        this.state.comment = '';
    }

    render() {
        console.log('App', this.props, this.state);


        return (
          <div>  
            <RenderComponents 
                key='pc1'
                components = {components}
                data = {this.state.inputAttempt}
            />

            {/* Button should be outside components -- more flexible */}
            {/* components can be different from ComponentData such as a merge */}
            <PDFButton
                meta = {PDFButtonMeta}
                components = {components}
                data = {this.state.inputAttempt}
            />

            {/* Span for Comment */}
            <span className='span-comment'><i>{this.state.comment}</i></span>
          </div>
        );
    }
}

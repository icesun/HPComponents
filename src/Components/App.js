import React from "react"
import axios from "axios"

import PdfTextArea from "./PdfTextArea"
import PdfTable from "./PdfTable"

import { title, api_msg, components } from "./ComponentData"



export default class App extends React.Component {
    constructor(props){
        super(props);


        this.state = props.appState;


        this.testJWTClick = this.testJWTClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


/*    
    initStateInput() {
        console.log('components', components);

    }
*/

    componentWillMount(){
        console.log("Layout component will mount")

    }
    componentDidMount(){
        console.log("Layout component did mount");
    }
    componentWillUnmount(){
        console.log("Layout component will unmount")
    }

    handleChange(event) {
        console.log('handle changes...', event.target, event.type, event);
    }

    testJWTClick(event) {
        console.log('testJWT clicked.');
        axios.get('../public/api/action_api.php', {
            params: {
                action: 'getLtiInfo',
                jwt_token: $JWT_TOKEN,
            }
        })
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log('error', error);
        });
    }

    rendercomponents() {

        let renderComponents = components.map(item => {
            //console.log('comp', item);

            switch(item.type) {
                case 'PdfTextArea':
                    return this.renderPdfTextArea(item);
                case 'PdfTable':
                    return this.renderPdfTable(item);
            }
        });

        return renderComponents;

    }

    renderPdfTextArea(meta) {
        return (
            <PdfTextArea  key={meta.id}
                 taClassName={meta.classes}
                 questionLabel = {meta.extra_data.label}
                 questionText = {meta.extra_data.question}
                 handleChange = {this.handleChange}
            />
        );
    }

    renderPdfTable(meta) {
        return (
            <PdfTable key={meta.id} 
                tClassName = {meta.classes}
                trMeta = {meta.tr_arr}
            />
        );
    }


    render(){
        console.log('lti_var', $LTI_VARS);
        console.log('jwt_token', $JWT_TOKEN);

        var renderComponents = this.rendercomponents();
        console.log('aaa', renderComponents);

        return (
          <div className="container">
            <h1>{title}</h1>
            <h2>{api_msg}</h2>
            <div>
                {renderComponents} 
            </div>
          </div>
        );
    }
}


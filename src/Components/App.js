import React from "react"
import axios from "axios"

import { PdfTextArea } from "./PdfTextArea"
import PdfTable from "./PdfTable"

import { title, api_msg, components } from "./ComponentData"



export default class App extends React.Component {
    constructor(props){
        super(props);

        //this.state = this.initStateInput(components, props.dbAttempt);
        this.state = {};
        props.dbAttempt.attempt_json ? this.state.storedAttempt = JSON.parse(props.dbAttempt.attempt_json) : this.state.storedAttempt = {};
        this.state.inputAttempt = this.state.storedAttempt;

        console.log('state', this.state);

        this.testJWTClick = this.testJWTClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    
    initStateInput(components, attempt) {
        console.log('params', components, attempt);
    }


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
        console.log('handle changes...', event.target, event.target.value, event.target.type, event.target.getAttribute('data-key'));

        let newInput = {};

        switch(event.target.type) {
            case 'textarea':
                newInput = this.textareaChanged(event.target.getAttribute('data-key'), event.target.value);
            break;

        }

        this.setState((prevState) => {
            return {inputAttempt: Object.assign({}, prevState.inputAttempt, newInput)};
        });


        /*
        let target_key = event.target.getAttribute('data-key');
        let target_value = event.target.value;

        this.setState((prevState) => {
            let newInput = {}
            newInput[target_key] = target_value;
            console.log('target', target_key, target_value, newInput);

            return {inputAttempt: Object.assign({}, prevState.inputAttempt, newInput)};

        });
        */
    }

    textareaChanged(key, value) {
        let newInput = {};
        newInput[key] = value;
        return newInput;
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
                meta = {meta}
                handleChange = {this.handleChange}
                data = {this.state.inputAttempt}
            />
        );
    }


    renderPdfTable(meta) {
        return (
            <PdfTable key={meta.id} 
                //tClassName = {meta.classes}
                //trMeta = {meta.tr_arr}
                meta = {meta}
                handleChange = {this.handleChange}
                data = {this.state.inputAttempt}
            />
        );
    }


    render(){
        //console.log('lti_var', $LTI_VARS);
        //console.log('jwt_token', $JWT_TOKEN);

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


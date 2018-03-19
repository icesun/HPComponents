import React from "react"
//import axios from "axios"
import { attemptTable, client } from "../index"


import  PdfTextArea  from "./PdfTextArea"
import  PdfTable  from "./PdfTable"
import  Button  from "./Button"

import { title, api_msg, components } from "./ComponentData"



export default class App extends React.Component {
    constructor(props){
        super(props);

        //this.state = this.initStateInput(components, props.dbAttempt);
        this.state = {};
//        props.dbAttempt.attempt_json ? this.state.storedAttempt = JSON.parse(props.dbAttempt.attempt_json) : this.state.storedAttempt = {};
        this.state.dbAttempt = props.dbAttempt;
        props.dbAttempt.attempt_json ? this.state.inputAttempt = JSON.parse(props.dbAttempt.attempt_json) : this.state.inputAttempt = {};
//        this.state.inputAttempt = this.state.storedAttempt;

        console.log('state', this.state);

//        this.testJWTClick = this.testJWTClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
        this.saveDB = this.saveDB.bind(this);
        this.downloadPDF = this.downloadPDF.bind(this);
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
        //console.log('handle changes...', event.target, event.target.value, event.target.type, event.target.getAttribute('data-key'));

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

    
    handleClick(event) {
        //console.log('clicked', event.target, event.target.getAttribute('data-action'));
        let action = event.target.getAttribute('data-action');

        switch(action) {
            case 'saveDB':
                this.saveDB();
            break;
            
            case 'downloadPDF':
                this.downloadPDF();
            break;
        }
    }

    downloadPDF() {
        console.log('downloadPDF', this.state);
    }

    saveDB() {
        console.log('saveDB', this.state);

        var now = new Date().getTime();
        var attempt_json = JSON.stringify(this.state.inputAttempt);
        if(this.state.dbAttempt.attempt_id)  {
            //attempt exist, update it
            let aid = this.state.dbAttempt.attempt_id;
            let update_attempt = {
                attempt_json: attempt_json,
                update_timestamp: now
            };

            client.put('/' + attemptTable + '/' + aid, update_attempt, {
                params: {
                    jwt_token: $JWT_TOKEN,
                }
            })
            .then((response)=> {
                //console.log('response', response);
                //console.log('updated', this.state);
                this.setState((prevState) => {
                    return {dbAttempt: Object.assign({}, prevState.dbAttempt, update_attempt)};
                });
            })
            .catch((error)=> {
                console.log('error', error);
            });
            
        }
        else {

            //attempt not exist, create it
            let attempt = {
                activity_id: $ACTIVITY_ID,
                course_id: $COURSE_ID,
                student_id: $STUDENT_ID,
                attempt_json: attempt_json,
                create_timestamp: now
            };

            client.post('/' + attemptTable, attempt, {
                params: {
                    jwt_token: $JWT_TOKEN,
                }
            })
            .then((response)=> {
                //console.log('response', response);
                //console.log('saved', this.state);
                //let attempt_id = response.data;
                this.setState((prevState) => {
                    return {dbAttempt: Object.assign({}, prevState.dbAttempt, {attempt_id: response.data}, attempt)};
                });

            })
            .catch((error)=> {
                console.log('error', error);
            });
        }

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
                case 'Button':
                    //return '';
                    return this.renderButton(item);
            }
        });

        return renderComponents;

    }

    renderButton(meta) {

        return (
            <Button key={meta.id}
                meta = {meta}
                handleClick = {this.handleClick}
            />
        );
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
        var renderComponents = this.rendercomponents();

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


import React from "react"
import axios from "axios"

import PdfTextArea from "./PdfTextArea"
import PdfTable from "./PdfTable"



const components = [
    {
        id: 'c1',
        type: 'PdfTextArea',
        classes: "form-control pdftextarea ta_medium",
        extra_data: {
            label: 'What is the problem or goal?',
            question: 'Current situation: What is happening now; what is problematic?  Desired future: What is the business need; What does the context/strategy call for?',
        }
    },
    {
        id: 'c2',
        type: 'PdfTable',
        classes: "table pdftable",
        tr_arr: [
            {
                classes: '',
                td_arr: [
                    {text: 'Lever', classes: 'th-black'},
                    {text: 'What’s happening now?', classes: 'td-black'},
                    {text: 'What could you do?', classes: 'td-black'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Leadership commitment(What’s modelled)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Values & behaviours(What’s expected)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Workforce capabilities(Who’s equipped)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Recognition & consequences(What’s reinforced)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Practices & procedures(What’s habitual)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}],
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Underpinning structures(What enables)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}]
            },
            {
                classes: '',
                td_arr: [
                    {text: 'Monitor & evolve(What’s measured)', classes: 'th-blue'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'},
                    {text: '', classes: 'td-blue td-embed', embed: 'textarea'}]
            },
        ],
    },
    {
        id: 'c3',
        type: 'PdfTextArea',
        classes: "form-control pdftextarea ta_medium",
        extra_data: {
            label: 'Action you can take?',
            question: '(Clarify business need; Further investigation to identify levers in play; Explore areas where levers are having different impact; Other…)',
        }
        
    }

];

export default class App extends React.Component {
    constructor(props){
        super(props);

        let defaultState = {
            input_val:"",
            api_message:""
        }
        props.appState ? this.state = props.appState : this.state = defaultState


        this.testJWTClick = this.testJWTClick.bind(this);
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
            <h1>{this.state.input_val}</h1>
            <h2>{this.state.api_message}</h2>
            <div>
                {renderComponents} 
            </div>
          </div>
        );
    }
}


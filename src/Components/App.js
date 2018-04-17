import React from "react"
import uuid from "uuid"


//import axios from "axios"
import { attemptTable, client } from "../index"


import  PdfTextArea  from "./PdfTextArea"
import  PdfTable  from "./PdfTable"
import  Button  from "./Button"

import { components, components_pdfstyles, tableWidths } from "../data/ComponentData"


// Key have to be fixed every running
export function createKey(meta, index = 0, prefix = '') {
    if(meta.id) {
        return meta.id;
    }

    if(prefix) {
        //console.log('here', prefix);
        return prefix + '_' + index;
    }
    
    return uuid.v4();
}

export class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
        this.state.dbAttempt = props.dbAttempt;
        props.dbAttempt.attempt_json ? this.state.inputAttempt = JSON.parse(props.dbAttempt.attempt_json) : this.state.inputAttempt = {};

        

//        this.testJWTClick = this.testJWTClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
        this.saveDB = this.saveDB.bind(this);
        this.downloadPDF = this.downloadPDF.bind(this);

        this.pdfTextArea = this.pdfTextArea.bind(this);

        this.pdfTable = this.pdfTable.bind(this);
        this.pdfTR = this.pdfTR.bind(this);
        this.pdfTD = this.pdfTD.bind(this);
        this.pdfEmbed = this.pdfEmbed.bind(this);
        //this.pdfStringComponent = this.pdfStringComponent.bind(this);
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
        //console.log('handle changes...', event.target.dataset.key);


        switch(event.target.type) {
            case 'textarea':

                this.setState({
                    inputAttempt: {...this.state.inputAttempt, [event.target.dataset.key]:event.target.value}
                })
            break;

        }
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

            default: 
            break;
        }
    }

    downloadPDF() {
        console.log('downloadPDF', this.state);

        var docDefinition = {};

        /*
        var pdf_title = {};
        if(title) {
            pdf_title = {
                text: title,
                style: 'header',
            }
        }

        var pdf_api_msg = {};
        if(api_msg) {
            pdf_api_msg = {
                text: api_msg,
                style: 'api_msg',
            }
        }
        */

        let pdfContent = components.map(item => {

            switch(item.type) {
                case 'PdfTextArea':
                    return this.pdfTextArea(item);

                case 'PdfTable':
                    return this.pdfTable(item);
                    //return '';
        

                case 'StringComponent':
                    return this.pdfStringComponent(item);



                case 'Button':
                return '';

                default: 
                    return '';
            }

        });

//        docDefinition['content'] = [ pdf_title,  pdf_api_msg, ...pdfContent];
        docDefinition['content'] = pdfContent;
        docDefinition['styles'] = components_pdfstyles;

        docDefinition['footer'] = function(currentPage, pageCount) {
            var columns = [];
            var d = new Date();
            columns.push(d.toString());
            columns.push({text: currentPage, alignment: 'right'});

            return {columns: columns};
        }
    
        console.log('docDefinition', docDefinition);
        pdfMake.createPdf(docDefinition).download();

    }

    pdfStringComponent(item) {
        var pdfStringComponent = {};

        switch(item.tag) {
            case 'p':
                pdfStringComponent['text'] = item.text;
                if(item.pdf_style) {
                    pdfStringComponent['style'] = item.pdf_style;
                }
                else {
                    pdfStringComponent['style'] = '';
                }
            break;
        }

        return pdfStringComponent;
    }


    pdfTextArea(item) {
        //console.log('pdfTextarea', item, this.state);
        var pdfTA = [];
        if(item.extra) {
            if(item.extra.label) {
                pdfTA.push({
                    text: item.extra.label,
                    style: 'taLabel',
                });
            }
            if(item.extra.question) {
                pdfTA.push({
                    text: item.extra.question,
                    style:'taDesc',
                });
            }
        }

        var value;
        this.state.inputAttempt[item.id] ? value = this.state.inputAttempt[item.id] : value = '';
        pdfTA.push({
            style: 'oneline',
            table: {
                widths: ['*'],
                body: [
                    [value + '\n\n']
                ]
            }
        });

        return pdfTA;
    }


    pdfEmbed(item) {

        var pdfEmbed ={};

        switch(item.type) {
            case 'PdfTextArea':
                if(item.pdfClass) {
                    //pdfEmbed = {};
                    pdfEmbed['text'] = this.state.inputAttempt[item.id];
                    pdfEmbed['style'] = item.pdf_style;
                }
                else {
                    this.state.inputAttempt[item.id] ? pdfEmbed = this.state.inputAttempt[item.id] : pdfEmbed = '';
                }
            break;
            
            case 'ul':
            	//without pdfClass
            	pdfEmbed['ul'] =  item.list;            	
            break;
                
        }

        //console.log('pdfEmbed', pdfEmbed);

        return pdfEmbed;

    }

    pdfTD(item) {
        //console.log('td', item);

        var pdfTD = {};
        
        switch(item.type) {
            case 'NormalTD': 
                if(item.pdf_style) {
                    pdfTD['text'] = item.text;
                    pdfTD['style'] = item.pdf_style;
                }
                else {
                    pdfTD = item.text;
                }
            break;
            
            case 'HTMLTD':
            	//without pdfClass
            	if(item.text) {
	            	pdfTD = item.text;
            	}
            	else {
	            	pdfTD = item.html;
            	}
            break;

            case 'EmbededTD':
                pdfTD = item.embed.map(this.pdfEmbed);
            break;

        }

        return pdfTD;
    }

    pdfTR(item) {
        //console.log('pdfTR', item, this.state);

        var pdfTR = item.td_arr.map(this.pdfTD);

        return pdfTR;
    }

    pdfTable(item) {
        //console.log('pdfTable', item, this.state);
        var pdfTable = {};

        var tableBody = item.tr_arr.map(this.pdfTR);

        pdfTable.widths = tableWidths[item.id];
        item.headerRows ? pdfTable.headerRows = item.headerRows : pdfTable.headerRows = 1;

        pdfTable.body = tableBody;

        return {
            style: 'oneline',
            table: pdfTable
        };
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
            
            if($LTI_VARS['lis_person_sourcedid']) {
	            console.log('username is provided');
	            attempt['student_name'] = $LTI_VARS['lis_person_sourcedid'];
            }
            

            client.post('/' + attemptTable, attempt, {
                params: {
                    jwt_token: $JWT_TOKEN,
                }
            })
            .then((response)=> {
                //console.log('response', response);
        
                this.setState((prevState) => {
                    return {dbAttempt: Object.assign({}, prevState.dbAttempt, {attempt_id: response.data}, attempt)};
                });

            })
            .catch((error)=> {
                console.log('error', error);
            });
        }

    }
    
/*
    textareaChanged(key, value) {
        let newInput = {};
        newInput[key] = value;
        return newInput;
    }   
*/

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

                case 'StringComponent':
                    return this.renderStringComponent(item);

                case 'Button':
                    return this.renderButton(item);
            }
        });

        return renderComponents;

    }

    renderStringComponent(meta) {
        var key = createKey(meta);
        var result;

        switch(meta.tag) {
            case 'p':
                result = <p className={meta.classes} key={key}>{meta.text}</p>;
            break;

        }

        return result;
    }


    renderButton(meta) {
        var key = createKey(meta);

        return (
            <Button key={key}
                meta = {meta}
                handleClick = {this.handleClick}
                data = {this.state}
            />
        );
    }

    renderPdfTextArea(meta) {
        var key = createKey(meta);

        return (
            <PdfTextArea  key={key}
                meta = {meta}
                handleChange = {this.handleChange}
                data = {this.state.inputAttempt}
            />
        );
    }


    renderPdfTable(meta) {
        //console.log('table', meta);
        var key = createKey(meta);

        return (
            <PdfTable key={key} 
                meta = {meta}
                handleChange = {this.handleChange}
                data = {this.state.inputAttempt}
            />
        );
    }


    render(){
        var renderComponents = this.rendercomponents();


        return (
            <div>
                {renderComponents} 
            </div>
        );
    }
}


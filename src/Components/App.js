import React from "react"
import uuid from "uuid"

import { attemptTable, client } from "../index"
//import { components, components_pdfstyles } from '../data/ComponentData'
import { components } from '../data/ComponentData'
import { pdfstyles } from '../data/PDFStyles'

import '../StyleSheets/Custom.scss'



import RenderComponents from "./RenderComponents"
import PDFButton from "./PDFButton"
import DBButton from "./DBButton"

const PDFButtonMeta = {
    classes: 'btn btn-primary btn-pdf',
    value: 'Download PDF',
}

const DBButtonMeta = {
    classes: 'btn btn-primary btn-db',
    value: 'Save',
}


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.dbAttempt = props.dbAttempt;
        props.dbAttempt.attempt_json ? this.state.inputAttempt = JSON.parse(props.dbAttempt.attempt_json) : this.state.inputAttempt = {};
        this.state.comment = '';

        this.handleChange = this.handleChange.bind(this);
        this.saveDB = this.saveDB.bind(this);
        this.setStateComment = this.setStateComment.bind(this);
    }

    handleChange(event) {
        //console.log('handle changes...', event.target.dataset.key);
        this.setState({comment: ''});


        switch(event.target.type) {
            case 'textarea':

                this.setState({
                    inputAttempt: {...this.state.inputAttempt, [event.target.dataset.key]:event.target.value}
                })
            break;

        }
    }

    saveDB(event) {
        console.log('DBButton is clicked.', this.state);


        var now = new Date().getTime();
        var attempt_json = JSON.stringify(this.state.inputAttempt);        if(this.state.dbAttempt.attempt_id)  {
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
                    return {dbAttempt: Object.assign({}, prevState.dbAttempt, update_attempt), comment: 'Thank you for your submission.'};
                });
            })
            .catch((error)=> {
                console.log('error', error);
                this.setStateComment('Save Failed. Please contact technique support.');
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
                    return {dbAttempt: Object.assign({}, prevState.dbAttempt, {attempt_id: response.data}, attempt), comment: 'Thank you for your submission.'};
                });

            })
            .catch((error)=> {
                console.log('error', error);
                this.setStateComment('Save Failed. Please contact technique support.');
            });
        }
    } 

    setStateComment(new_comment) {
        //console.log('setStateComment', new_comment);
        this.setState({comment: new_comment});
    }
    
    render() {
        console.log('App', this.props, this.state);
        //var Nn = 'ol';


        return (
          <div>  
            <RenderComponents 
                key='pc1'
                components = {components}
                data = {this.state.inputAttempt}
                handleChange = {this.handleChange}
            />

            {/* Button should be outside components -- more flexible */}
            {/* DBButton does related to components. Only related to this.state  */}
            <DBButton
                meta = {DBButtonMeta}
                data = {this.state}
                handleClick = {this.saveDB}
            />

            {/* components can be different from ComponentData such as a merge of more than one arrays*/}
            <PDFButton
                meta = {PDFButtonMeta}
                components = {components}
                pdfstyles = {pdfstyles}
                data = {this.state}
                setStateComment = {this.setStateComment}
            />

            {/* Span for Comment */}
            <span className='span-comment'><i>{this.state.comment}</i></span>

            {/*
            <Nn>
                <li>apple</li>
                <li>banana</li>
            </Nn>
            */}
          </div>
        );
    }
}

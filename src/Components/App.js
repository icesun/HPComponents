import React from "react"
import axios from "axios"
import styled from "styled-components"
import { Switch, Route } from 'react-router-dom'

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
                action: 'testJWT',
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


    render(){
        console.log('lti_var', $LTI_VARS);
        console.log('jwt_token', $JWT_TOKEN);

        return (
          <div className="container">
            <h1>{this.state.input_val}</h1>
            <h2>{this.state.api_message}</h2>
                <div>
                  <div>
                    <button className="btn btn-primary" onClick={this.testJWTClick}>Test API</button>
                  </div>
                </div>
          </div>
        );
    }
}



import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import axios from 'axios'

import App from "./Components/App"
//import {title, api_msg, components } from "./Components/ComponentData.js"

const appContainer = document.getElementById('app');
const tableName = 'Attempts';

const client = axios.create({
    baseURL: '../public/api/rest_api.php/',
    responseType: 'json'
});

//console.log('global', $LTI_VARS, $JWT_TOKEN);

let condition1 = 'course_id,eq,' + $LTI_VARS['context_id'];
let condition2 = 'student_id,eq,' + $LTI_VARS['user_id'];
let conditions = [condition1, condition2];

client.get('/' + tableName, {
    params: {
        filter: conditions,
        transform: 1,
        jwt_token: $JWT_TOKEN,
    }
})
.then((response) => {
    console.log('response', response);
    loadApp(response.data);
})
.catch((error) => {
    console.log('error', error);
});


function loadApp(dbAttempt) {
    ReactDOM.render(
        <BrowserRouter>
            <App 
                dbAttempt={dbAttempt}
            />
        </BrowserRouter>,
    appContainer);
}

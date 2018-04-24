
import React from "react"
import ReactDOM from "react-dom"

import axios from 'axios'

import { App } from "./Components/App"

/* attempt table name */
export const attemptTable = 'Attempts';

export const client = axios.create({
    baseURL: './api/rest_api.php/',
    responseType: 'json'
});

console.log('global', $LTI_VARS, $JWT_TOKEN);
let condition1 = 'activity_id,eq,' + $ACTIVITY_ID;
let condition2 = 'course_id,eq,' + $COURSE_ID;
let condition3 = 'student_id,eq,' + $STUDENT_ID;
let conditions = [condition1, condition2, condition3];
console.log('conditions', conditions);

client.get('/' + attemptTable, {
    params: {
        filter: conditions,
        order: 'create_timestamp,desc',
        transform: 1,
        jwt_token: $JWT_TOKEN,
    }
})
.then((response) => {
    console.log('response', response);
    var dbAttempt = {};
    if(response.data.Attempts.length > 0) {
        dbAttempt = response.data.Attempts[0];
    }
    loadApp(dbAttempt);
})
.catch((error) => {
    console.log('error', error);
});

const appContainer = document.getElementById('app');

function loadApp(dbAttempt) {
    ReactDOM.render(
        <App 
            dbAttempt={dbAttempt}
        />,
    appContainer);
}

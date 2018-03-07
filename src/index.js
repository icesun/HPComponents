
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import App from "./Components/App"

const appContainer = document.getElementById('app');
let state = {
    input_val:"Cultural Workbook Tool",
    api_message:"",
}
ReactDOM.render(<BrowserRouter><App appState={state}/></BrowserRouter>, appContainer);

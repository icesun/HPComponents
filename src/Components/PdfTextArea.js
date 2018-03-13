import React from "react"
import "../StyleSheets/PdfTextArea.scss"

export default class PdfTextArea extends React.Component {

    
   constructor(props) {
        super(props)
   }
   componentWillMount(){
   }
   componentDidMount(){
   }
   componentWillUnmount(){
   }

   render() {


     return(
        <div class="form-group">
            <label>{this.props.questionLabel}</label><span>{this.props.questionText}</span>
            <div><textarea  className={this.props.taClassName} onChange={this.props.handleChange}></textarea></div>
        </div>
     ); 

   }

}
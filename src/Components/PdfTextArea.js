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
    let value = '';
    console.log('ta props', this.props);
    if(this.props.data[this.props.dataKey]) {
       value = this.props.data[this.props.dataKey];
       console.log('abc', text);
     }

     return(
        <div class="form-group">
            <label>{this.props.questionLabel}</label><span>{this.props.questionText}</span>
            <div><textarea className={this.props.taClassName} onChange={this.props.handleChange} value={value} data-key={this.props.dataKey}/></div>
        </div>
     ); 

   }

}
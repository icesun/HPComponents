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

//    let value = '';
    let dataKey = this.props.dataKey;
    let value = '';
    if(this.props.data[dataKey]) {
      value = this.props.data[dataKey];
    }
    console.log('ta props', this.props, dataKey, value);

     return(
        <div class="form-group">
            <label>{this.props.questionLabel}</label><span>{this.props.questionText}</span>
            <div><textarea className={this.props.taClassName} onChange={this.props.handleChange} value={value} data-key={dataKey}/></div>
        </div>
     ); 

   }

}
import React from "react"


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
        <div className={this.props.taClassName}>
            <label>{this.props.questionLabel}</label><span>{this.props.questionText}</span>
            <div><textarea></textarea></div>
        </div>
     ); 

   }

}
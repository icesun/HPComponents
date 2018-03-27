import React from "react"
import uuid from "uuid"

//import { createKey } from "./App"

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
    //console.log('ta', this.props);

    var extra_div = '';
    var meta = this.props.meta;
    var data = this.props.data;
    if(meta.extra) {
      var extra = [];
      if(meta.extra.label) {
        extra.push(<label className='ta_label' key={uuid.v4()}>{meta.extra.label}</label>);
      }

      if(meta.extra.question) {
        extra.push(<span className='ta_span' key={uuid.v4()}>{meta.extra.question}</span>);
      }
      var extra_div = (<div>{extra}</div>);
    }

    return(
      <div className={meta.div_classes}>
        {extra_div}
        <textarea className={meta.classes} onChange={this.props.handleChange} value={data[meta.id]} data-key={meta.id}/>
      </div>
    );

   }

}
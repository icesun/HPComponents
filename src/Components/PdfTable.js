import React from "react"
//import uuid from "uuid"

import  PdfTextArea  from "./PdfTextArea"
import { createKey } from "./App"

//import '../StyleSheets/PdfTable.scss'

export default class PdfTable extends React.Component {

    
   constructor(props) {
        super(props);

        this.createTR = this.createTR.bind(this);
        this.createTD = this.createTD.bind(this);
        this.createEmbed = this.createEmbed.bind(this);
   }
   componentWillMount(){
   }
   componentDidMount(){
   }
   componentWillUnmount(){
   }

  createEmbed(meta, i, prefix) {
    var key = createKey(meta, i, prefix);

    switch(meta.type) {
      case 'PdfTextArea':
        return (
          <PdfTextArea key={key}
            meta = {meta}
            handleChange = {this.props.handleChange}
            data = {this.props.data}
          />
        );

      //Other types AA
      //case AA:
      //return  
    }


  }


  createTD(meta, i, prefix) {
    var key = createKey(meta, i, prefix);

    var tdContent = '';

    switch(meta.type) {
      case 'NormalTD':
        tdContent = meta.text;
      break;

      case 'EmbededTD':
        tdContent = meta.embed.map((x, i) => { return this.createEmbed(x, i, key); });
      break;

    }


    return (<td key={key} class={meta.classes}>{tdContent}</td>);
  }
  

  createTR(meta, i, prefix) { 
    var key = createKey(meta, i, prefix);

    var tdArray = meta.td_arr.map((x, i) => { return this.createTD(x, i, key); });
    
    return (<tr key={key} className={meta.classes}>{tdArray}</tr>);  
   }


   render() {
    //console.log('table props', this.props);

    var meta = this.props.meta;
    //var data = this.props.data;
     
    var trArray = meta.tr_arr.map((x, i) => { return this.createTR(x, i, meta.id); });

     return(
        <div className={meta.div_classes}>
          <table className={meta.classes}>
            <tbody>
              {trArray}
            </tbody>
          </table>
        </div>
     ); 
   }

}
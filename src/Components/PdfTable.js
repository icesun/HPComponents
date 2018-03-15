import React from "react"
import uuid from "uuid"

import  PdfTextArea  from "./PdfTextArea"

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

  createEmbed(meta) {
    //console.log('embed', meta);

    switch(meta.type) {
      case 'PdfTextArea':
        return (
          <PdfTextArea key={meta.id}
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


  createTD(meta) {
    var tdContent = '';

    switch(meta.type) {
      case 'NormalTD':
        tdContent = meta.text;
      break;

      case 'EmbededTD':
        tdContent = meta.embed.map(this.createEmbed);
      break;

    }


    return (<td key={'td' + meta.id} class={meta.classes}>{tdContent}</td>);
  }
  

  createTR(meta) { 
    var tdArray = meta.td_arr.map(this.createTD);
    
    return (<tr key={'tr' + meta.id} className={meta.classes}>{tdArray}</tr>);  
   }


   render() {
    console.log('table props', this.props);

    var meta = this.props.meta;
    //var data = this.props.data;
     
    var trArray = meta.tr_arr.map(this.createTR);

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
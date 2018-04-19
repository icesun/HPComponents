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

//    console.log('key', key);

    switch(meta.type) {
      case 'PdfTextArea':
        return (
          <PdfTextArea key={key}
            meta = {meta}
            handleChange = {this.props.handleChange}
            data = {this.props.data}
          />
        );
        
      case 'ul':

        var listItems = meta.list.map((list_text, i) => {
          var list_key = createKey(list_text, i, key);
	          return (
  		        <li key={list_key}>{list_text}</li>  
	          ); 
        });
        //console.log('list items', meta, listItems);
        
        return (
	        <ul className={meta.classes} key={key}>{listItems}</ul>
        );

      //Other types AA
      //case AA:
      //return  
    }

    return (
      <div className="other_embed"></div>
    );
  }


  createTD(meta, i, prefix) {
    var key = createKey(meta, i, prefix);

    var tdContent = '';

    switch(meta.type) {
      case 'NormalTD':
        tdContent = meta.text;
      break;
      
      case 'HTMLTD':
      	tdContent = <div className='htmlTD' dangerouslySetInnerHTML={{__html: meta.html}}></div>;
      	break;
      	
      case 'EmbededTD':
        tdContent = meta.embed.map((x, i) => { return this.createEmbed(x, i, key); });
      break;

    }


      	//console.log('td', tdContent);

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
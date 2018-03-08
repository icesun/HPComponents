import React from "react"
import uuid from "uuid"

import "../StyleSheets/PdfTable.scss"



export default class PdfTable extends React.Component {

    
   constructor(props) {
        super(props)
   }
   componentWillMount(){
   }
   componentDidMount(){
   }
   componentWillUnmount(){
   }

   createTrArrays() {
      let trArrays = this.props.trMeta.map(tr => {
        let tdArrays = tr.td_arr.map(td => {
          console.log('td', td);

          /*
          if(td.text == '') {

          }
          return (<td key={'td' + uuid.v4()} className={td.classes}>{td.text}</td>);
          */

          return this.createTd(td);


        });

        return (<tr key={'td' + uuid.v4()} className={tr.classes}>{tdArrays}</tr>);

      });

      return trArrays;


   }

   createTd(td) {


    if(td.text != '') {
      return (<td key={'td' + uuid.v4()} className={td.classes}>{td.text}</td>);
    }

    let embed_component = '';
    switch(td.embed) {
      case 'textarea':
        embed_component = this.embed_textarea();
        break;

      default:
        embed_component = td.embed;
    }

    return (<td key={'td' + uuid.v4()} className={td.classes}>{embed_component}</td>);
   }

   embed_textarea() {
     return (
       <textarea className="form-control embed_component"></textarea>
     )
   }

   render() {
    console.log('props', this.props);

    var trArrays = this.createTrArrays();

     return(
        <div className='table-responsive'>
          <table className={this.props.tClassName}>
            <tbody>
              {trArrays}
            </tbody>
          </table>
        </div>
     ); 

   }

}
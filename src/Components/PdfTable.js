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

          return (<td key={'td' + uuid.v4()} className={td.classes}>{td.text}</td>);

        });

        return (<tr key={'td' + uuid.v4()} className={tr.classes}>{tdArrays}</tr>);

      });

      return trArrays;


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
import React from "react"


export default class Button extends React.Component {

    
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
    //console.log('button', this.props);

    var meta = this.props.meta;
    var data = this.props.data;

    /*
    var same = true;
    if(data.dbAttempt.attempt_json != JSON.stringify(data.inputAttempt))  {
      same = false;
    }
    */

   var disabled = '';
   if(data.dbAttempt.attempt_json == JSON.stringify(data.inputAttempt))  {
     //console.log('A');
     if(meta.extra.action == 'saveDB') {
       //console.log('B');
       disabled = 'disabled';
     }
   }
   else {
    if(meta.extra.action == 'downloadPDF') {
      disabled = 'disabled';
    }    
   }
    

    return(
      <button className={meta.classes} onClick={this.props.handleClick}  disabled={disabled} data-action={meta.extra.action}>{meta.value}</button>
    );



   }

}
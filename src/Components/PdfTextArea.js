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
    //console.log('ta', this.props);

    var extra_div = '';
    var meta = this.props.meta;
    var data = this.props.data;
    if(meta.extra) {
      var extra = [];
      if(meta.extra.label) {
        extra.push(<label>{meta.extra.label}</label>);
      }

      if(meta.extra.question) {
        extra.push(<span>{meta.extra.question}</span>);
      }
      var extra_div = (<div>{extra}</div>);
    }

    return(
      <div className={meta.div_classes}>
        {extra_div}
        <textarea className={meta.classes} onChange={this.props.handleChange} value={data[meta.id]} data-key={meta.id}/>
      </div>
    );

/*    
//    let value = '';
    let dataKey = this.props.dataKey;
    let value = '';
    if(this.props.data[dataKey]) {
      value = this.props.data[dataKey];
    }
    console.log('ta props', this.props, dataKey, value);

    <div><textarea className={meta.classes} onChange={this.props.handleChange} value={data[meta.id]} data-key={meta.id}/></div>
      
     return(
            <label>{this.props.questionLabel}</label><span>{this.props.questionText}</span>
            <div><textarea className={this.props.taClassName} onChange={this.props.handleChange} value={value} data-key={dataKey}/></div>
     ); 
*/

   }

}
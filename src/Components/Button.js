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
    console.log('button', this.props);

    var meta = this.props.meta;


    return(
      <button className={meta.classes} onClick={this.props.handleClick}>{meta.value}</button>
    );



   }

}
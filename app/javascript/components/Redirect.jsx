import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }

  componentDidMount() {
    document.body.style.display = "none"
    console.log(this.state.shortName)
    const url = `/api/v1/shorturls/update/${this.state.shortName}`;
    fetch(url); 
    window.location = this.state.loc;
  } 
  
  render(){   
    return null;
  }
}

export default Redirect;
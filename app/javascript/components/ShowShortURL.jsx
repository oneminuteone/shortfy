import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "../components/Redirect"

class ShowShortURL extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect : {}
      };
      
    }
    componentDidMount() {
      const {
        match: {
          params: { shortName }
        }
      } = this.props;
      const url = `/api/v1/shorturls/${shortName}`;
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ redirect: response }))
        .catch(() => this.props.history.push("/"));
    }
 
    
    render() {
      return this.state.redirect.originalURL ?
      (
        <Redirect shortName={this.state.redirect.shortName} loc={this.state.redirect.originalURL}></Redirect>    
      ) :
      null;
    }

  }
  
  export default ShowShortURL;
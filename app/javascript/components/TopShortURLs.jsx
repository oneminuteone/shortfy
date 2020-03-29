import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "./Redirect"

class TopShortURLs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        topLinks : []
      };
      
    }
    componentDidMount() {
      const url = `/api/v1/shorturls/top`;
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => {
          this.setState({ topLinks: response })
          console.log(response)
        })
        .catch(() => this.props.history.push("/"));
    }
 
    
    render() {
      console.log(this.state.topLinks);
      const list = this.state.topLinks.map((item,index) => {
        return (
          <div className="row" key={index}>
            <div className="cell "><a href={window.location.href+item.shortName}>{item.shortName}</a></div>
            <div className="cell url-cell"><a href={item.originalURL}>{item.originalURL}</a></div>
            <div className="cell">{item.views}</div>
          </div>          
        );        
      });

      return(
        <div className="table">
          <h2>Top Short Links</h2>
          <div className="row headers">
            <div className="cell cell-header">Short Url</div>
            <div className="cell url-cell cell-header">URL</div>
            <div className="cell cell-header">Views</div>
          </div>
          {list}          
        </div>  
      );     
    }

  }
  
  export default TopShortURLs;
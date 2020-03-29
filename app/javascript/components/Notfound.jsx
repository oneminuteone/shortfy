import React from "react";
import { Link } from "react-router-dom";
import {DisplayShortURL} from "./DisplayShortURL"

class Notfound extends React.Component {
    constructor(props) {
      super(props);     
    }

    render() {
        return (
            <div className="form-wrapper">
                <h1 className="error">Page Not Found</h1>            
            </div>
        );
    }

  }
  
  export default Notfound;
import React from "react";
import { Link } from "react-router-dom";
import {DisplayShortURL} from "./DisplayShortURL"

class NewShorturl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalURL: "",
        shortName: "",
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    onSubmit(event) {
        event.preventDefault();

        const url = "/api/v1/shorturls/create";
        const { originalURL, shortName } = this.state;
    
        if (originalURL.length == 0)
          return;
    
        const body = {
         originalURL,
         shortName
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            this.setState({'shortName': response.shortName});
            this.setState({'showURL': true});
          })
          .catch(error => console.log(error.message));

    }

    render() {
      let form =this.state.showURL ?
        null:
        <form onSubmit={this.onSubmit} className="form">
          <input 
              type="url" 
              name="originalURL"
              placeholder="Enter your long url here"
              onChange={this.onChange}
          />
          <button type="submit">Shorten!</button>
        </form>;

        return (
            <div className="form-wrapper">
                <h1 className="title">Shortify</h1>
                <div className="break"></div>
                <h3 className="sub-title">Easily create amazing short URLs</h3>
                <div className="break"></div>
                {form}
                <div className="break"></div>
                <DisplayShortURL showURL={this.state.showURL} shortName={this.state.shortName} />
                <div className="break"></div>
                <h3>
                  <Link to={`/top/`} className="top-shortlinks">
                   View Top Shortlinks
                  </Link>
               </h3>                              
            </div>
        );
    }

  }
  
  export default NewShorturl;
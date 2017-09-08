import React, { Component } from "react";
import API from "../../utils/API";
import {Row, Input, Button} from "react-materialize";

class ArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleButtonClick = this.handleButtonClick.bind(this);
  }
/*  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
*/

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle(this.state.search);
  };
  searchArticle = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
     <Row>
      <Input placeholder="Topic" s={6} label="Topic" />
      <Input placeholder="Start" s={6} label="Start" />
      <Input placeholder="Year" s={6} label="Year" />
    </Row>
  
    <Button waves='light' onClick={this.handleFormSubmit} >Search</Button>
    </div> 
    )
  }
}

export default ArticleForm;
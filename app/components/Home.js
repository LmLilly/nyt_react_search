import React, { Component } from "react";
import Panel from "./common/Panel";
import ArticleForm from "./common/ArticleForm";
import API from "../utils/API";

class Home extends Component {
  state = {
    quotes: []
  };
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes = () => {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArticleForm
            getQuotes={this.getQuotes}
          />
        </div>
        <div className="row">
          <hr />
          {this.renderQuotes()}
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: ""
    };
  }

  componentDidMount() {
    this.setState({ test: "Sanjay" });
  }

  render() {
    return (
      <div>
        <div class="MyApp">Test Messsage : {this.state.test}</div>
      </div>
    );
  }
}

import React from "react";
export default class Trial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * On submitting the form the state variable is updated.
   * @param {*} event
   */
  handleSubmit(event) {
    event.preventDefault();
    let formVal = event.target.input1.value;
    this.setState({ value: event.target.input1.value });
    console.log(`State updated : ${formVal}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input1" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

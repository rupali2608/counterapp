import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="Container">
        <h1>{this.props.title}</h1>
        <h1>{this.state.count} </h1>
        <br />
        <button
          onClick={() => {
            console.log("Increment clicked");
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            console.log("Decrement clicked");
            this.setState({
              count: this.state.count - 1,
            });
          }}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            console.log("Reset");
            this.setState({
              count: 0,
            });
          }}
          style={{ width: "200px" }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Home;

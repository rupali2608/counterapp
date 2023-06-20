import React, { Component } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";

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
        <Button
          onClick={() => {
            console.log("Increment clicked");
            this.setState({
              count: this.state.count + 1,
            });
          }}
          variant="contained"
          color="primary"
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            console.log("Decrement clicked");
            this.setState({
              count: this.state.count - 1,
            });
          }}
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </Button>
        <br />
        <br />
        <Button
          onClick={() => {
            console.log("Reset");
            this.setState({
              count: 0,
            });
          }}
          variant="contained"
          color="secondary"
          style={{ width: "200px" }}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default Home;

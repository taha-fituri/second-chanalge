import React from "react";
import { Button } from "react-bootstrap";
import Counter from "./Components/Counter/Counter";
import "./App.css";
class App extends React.Component {
  state = {
    show: false,
  };
  handleShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <div className="maindiv">
          <Button variant="outline-info" onClick={this.handleShow}>
            {this.state.show === true ? "Hide " : "Show "}
          </Button>{" "}
          {this.state.show && <Counter />}
        </div>
      </>
    );
  }
}
export default App;

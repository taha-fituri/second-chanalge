import React from "react";
import { Button } from "react-bootstrap";
import Counter from "./Components/Counter/Counter";
import "./App.css";
import HookCounter from "./Components/Counter/HookCounter";
class App extends React.Component {
  state = {
    show: false,
    view: false,
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleview = () => {
    this.setState({
      view: !this.state.view,
    });
  };

  render() {
    return (
      <div className="maindiv">
        <div className="maindivclas">
          <Button
            style={{ width: "100px" }}
            variant="outline-info"
            onClick={this.handleShow}
          >
            {this.state.show === true ? "Hide cl com " : "Show cl com "}
          </Button>{" "}
          {this.state.show && <Counter />}
        </div>
        <div className="maindivfun">
          <Button
            style={{ width: "100px" }}
            variant="outline-info"
            onClick={this.handleview}
          >
            {this.state.view === true ? "Hide fn com " : "Show fn com "}
          </Button>{" "}
          {this.state.view && <HookCounter />}
        </div>
      </div>
    );
  }
}
export default App;

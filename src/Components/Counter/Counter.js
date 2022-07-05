import React from "react";
import { Button } from "react-bootstrap";
import "../Counter/Counter.css";
class App extends React.Component {
  state = {
    count: 0,
  };
  countplus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  countmines = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  countreset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <div className="countdiv">
          <div className="counterbuttons">
            <i class="fa-solid fa-circle-plus" onClick={this.countplus}></i>

            <h2>Counter : {this.state.count}</h2>
            <i
              class="fa-solid fa-circle-minus"
              onClick={this.state.count > 0 ? this.countmines : null}
            ></i>
          </div>
        </div>
        <Button
          style={{ width: "80px" }}
          variant="outline-warning"
          onClick={this.countreset}
        >
          Reset
        </Button>{" "}
      </>
    );
  }
}
export default App;

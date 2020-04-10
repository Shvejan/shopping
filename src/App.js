import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
export default class App extends Component() {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDel(id = 1) {
    this.setState({
      counters: this.state.counters.filter((x) => {
        return x.id !== id;
      }),
    });
  }
  reset = () => {
    this.setState({
      counters: this.state.counters.map((x) => {
        x.value = 0;
        return x;
      }),
    });
  };
  handleInc(id = 1) {
    this.setState({
      counters: this.state.counters.map((x) => {
        if (x.id === id) {
          x.value += 1;
        }
        return x;
      }),
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Counters
        counters={this.state.counters}/>
      </React.Fragment>
    );
  }
}

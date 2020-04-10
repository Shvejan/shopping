import Counter from "./counter";

import React, { Component } from "react";

export default class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm mt-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDel={this.props.onDel}
            onInc={this.props.onInc}
          >
            <h4>Counter: {c.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

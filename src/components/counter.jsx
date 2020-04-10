import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="mt-3">
        {this.props.children}
        <span className={this.classStyle()}>{this.formatCnt()}</span>
        <button
          className="btn btn-secondary btn-sm mt-2"
          onClick={this.props.onInc}
        >
          increase
        </button>
        <button
          className="btn btn-danger btn-sm mt-2"
          onClick={this.props.onDel}
        >
          delete
        </button>
      </div>
    );
  }

  classStyle() {
    let classes = "badge mt-2 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCnt() {
    return this.props.counter.value === 0 ? "Zero" : this.props.value;
  }
}

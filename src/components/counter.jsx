import React, { Component } from 'react'

class Counter extends Component {
  styles = {
    fontSize: 16,
    fontWeight: 'bold'
  }
  product = {
    id: 8089,
    name: 'Shirt'
  }

  // constructor() {
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    )
  }
  getBadge() {
    let classes = 'badge m-2'
    classes +=
      this.props.counter.value === 0 ? ' badge-warning' : ' badge-primary'
    return classes
  }

  formatCount() {
    const { value: count } = this.props.counter
    return count === 0 ? 'Zero' : count
  }
}

export default Counter

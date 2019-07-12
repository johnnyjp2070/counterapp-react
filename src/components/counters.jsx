import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn-sm btn-primary btn-lg m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    )
  }
}

export default Counters

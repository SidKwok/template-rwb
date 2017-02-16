import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
  handleClick = () => {
    this.props.actions.increment()
  }
  render () {
    return (
      <a className='counter'
        href='javascript: void(0)'
        onClick={this.handleClick}>
        {this.props.counter.count}
      </a>
    )
  }
}

import React, { Component } from 'react'

export default class AsyncView extends Component {
  state = {
    name: 'Async'
  }
  render () {
    return (
      <p>
        I'm {this.state.name} View.
      </p>
    )
  }
}

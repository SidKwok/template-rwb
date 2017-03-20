import React, { Component } from 'react'

export default class BarView extends Component {
  state = {
    name: 'bar'
  }
  render () {
    return (
      <p>
        I'm {this.state.name}.
      </p>
    )
  }
}

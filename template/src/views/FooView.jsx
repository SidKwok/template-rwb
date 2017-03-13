import React, { Component } from 'react'

export default class FooView extends Component {
  state = {
    name: 'foo'
  }
  render () {
    return (
      <p>
        I'm {this.state.name}.
      </p>
    )
  }
}

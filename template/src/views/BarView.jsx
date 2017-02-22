import React, { Component } from 'react'

export default class BarView extends Component {
  constructor (props) {
    super(props)
    this.state = {name: 'bar'}
  }

  render () {
    return (
      <p>
        I'm {this.state.name}.
      </p>
    )
  }
}

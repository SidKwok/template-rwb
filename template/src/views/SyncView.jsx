import React, { Component } from 'react'

export default class SyncView extends Component {
  state = {
    name: 'Sync'
  }
  render () {
    return (
      <p>
        I'm {this.state.name} View.
      </p>
    )
  }
}

import React, { Component } from 'react'
import './Hello.css'

export default class Hello extends Component {
  state = {
    msg: 'Hello World!'
  }
  render () {
    return (
      <div id='Hello'>
        <h2>{this.state.msg}</h2>
        <p className='doc'>
          <i className='redux'>Redux's</i> <a href='http://redux.js.org/' target='_blank'>doc</a>
          ( or <a href='http://cn.redux.js.org/' target='_blank'>zh-doc</a> )
        </p>
        <p className='doc'>
          <i className='router'>react-router's</i> <a href='https://reacttraining.com/react-router/web/example/basic' target='_blank'>doc</a>
        </p>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './MainView.css'

export default class FooView extends Component {
  static propTypes = {
    children: PropTypes.element
  }
  render () {
    return (
      <div className='main-view'>
        <div className='btn-group'>
          <Link to='/foo' className='btn' activeClassName='active'>To Foo</Link>
          <Link to='/bar' className='btn' activeClassName='active'>To Bar</Link>
        </div>
        <div className='view'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

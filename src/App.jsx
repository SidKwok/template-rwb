import React, { Component } from 'react'
import Hello from './components/Hello'
import logo from './assets/logo.svg'
import './App.css'

import { browserHistory as history, Router } from 'react-router'
import routes from 'routes'

import Counter from 'components/Counter'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        <Counter />
        <Hello />
        <Router history={history} routes={routes} key={Math.random()} />
      </div>
    )
  }
}

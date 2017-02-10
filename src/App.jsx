import React from 'react'
import { browserHistory as history, Router } from 'react-router'
import routes from 'routes'
import Hello from './components/Hello'
import logo from './assets/logo.svg'
import './App.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        <Hello />
        <Router history={history} routes={routes} />
      </div>
    )
  }
}

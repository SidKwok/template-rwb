import React from 'react'
{{#router}}import { {{history}} as history, Router } from 'react-router'
import routes from 'routes'{{/router}}
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
        <Hello />{{#router}}
        <Router history={history} routes={routes} />{{/router}}
      </div>
    )
  }
}

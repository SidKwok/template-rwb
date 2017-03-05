import React, { Component } from 'react'
import Hello from 'components/Hello'
{{#router~}}
import { {{history}} as history, Router } from 'react-router'
import routes from 'routes'
{{/router}}
{{#if_eq devtools "normal"~}}
import DevTools from 'components/DevTools'
{{/if_eq}}
import logo from './assets/logo.svg'
import './App.css'
{{#redux}}

import Counter from 'components/Counter'
{{/redux}}

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>{{#redux}}
        <Counter />{{/redux}}{{#if_eq devtools "normal"}}
        <DevTools />{{/if_eq}}
        <Hello />{{#router}}
        <Router history={history} routes={routes} key={Math.random()} />{{/router}}
      </div>
    )
  }
}

import React, { Component } from 'react'
import Hello from './components/Hello'
import logo from './assets/logo.svg'
import './App.css'
{{#router}}

import { {{history}} as history, Router } from 'react-router'
import routes from 'routes'
{{/router}}
{{#redux}}

import { Provider } from 'react-redux'
import Counter from 'components/Counter'
import configureStore from '$redux/store/configureStore'

const store = configureStore()
{{/redux}}

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>{{#redux}}
        <Provider store={store}>
          <Counter />
        </Provider>{{/redux}}
        <Hello />{{#router}}
        <Router history={history} routes={routes} key={Math.random()} />{{/router}}
      </div>
    )
  }
}

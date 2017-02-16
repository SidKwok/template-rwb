import React, { Component } from 'react'
import Hello from './components/Hello'
import logo from './assets/logo.svg'
import './App.css'
{{#router}}

import { {{history}} as history, Router } from 'react-router'
import routes from 'routes'
{{/router}}
{{#redux}}

import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import * as CounterActions from '$redux/actions'
import reducer from '$redux/reducers'
import Counter from 'components/Counter'

const store = createStore(reducer)

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

const CounterWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
{{/redux}}

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        {{#redux}}<Provider store={store}>
          <CounterWithStore />
        </Provider>{{/redux}}
        <Hello />{{#router}}
        <Router history={history} routes={routes} />{{/router}}
      </div>
    )
  }
}

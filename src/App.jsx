import React, { Component } from 'react'
import Hello from './components/Hello'
import logo from './assets/logo.svg'
import './App.css'

import { browserHistory as history, Router } from 'react-router'
import routes from 'routes'

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

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        <Provider store={store}>
          <CounterWithStore />
        </Provider>
        <Hello />
        <Router history={history} routes={routes} />
      </div>
    )
  }
}

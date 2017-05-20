import React from 'react'
import Hello from 'components/Hello'
{{#router~}}
{{#if_eq routerVersion "v3"~}}
import { {{history}} as history, Router } from 'react-router'
{{/if_eq}}
{{#if_eq routerVersion "v4"~}}
import { renderRoutes } from 'react-router-config'
import { {{history}} as Router } from 'react-router-dom'
{{/if_eq}}
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

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo shake-rotate' alt='logo' />
    </div>{{#redux}}
    <Counter />{{/redux}}{{#if_eq devtools "normal"}}
    <DevTools />{{/if_eq}}
    <Hello msg='Hello World' />{{#router}}{{#if_eq routerVersion "v3"}}
    <Router history={history} routes={routes} key={Math.random()} />{{/if_eq}}{{#if_eq routerVersion "v4"}}
    <Router>
      {renderRoutes(routes)}
    </Router>{{/if_eq}}{{/router}}
  </div>
)

export default App

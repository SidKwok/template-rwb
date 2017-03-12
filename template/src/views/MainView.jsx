import React, { Component, PropTypes } from 'react'
{{#if_eq routerVersion "v3"~}}
import { Link } from 'react-router'
{{/if_eq}}
{{#if_eq routerVersion "v4"~}}
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'
{{/if_eq}}
import './MainView.css'

export default class MainView extends Component {
  static propTypes = { {{~#if_eq routerVersion "v3"}}
    children: PropTypes.element{{/if_eq}}{{#if_eq routerVersion "v4"}}
    route: PropTypes.object{{/if_eq}}
  }
  render () {
    return (
      <div className='main-view'>
        <div className='btn-group'>
          <Link to='/foo' className='btn' activeClassName='active'>To Foo</Link>
          <Link to='/bar' className='btn' activeClassName='active'>To Bar</Link>
        </div>
        <div className='view'>{{#if_eq routerVersion "v3"}}
          {this.props.children}{{/if_eq}}{{#if_eq routerVersion "v4"}}
          {renderRoutes(this.props.route.childRoutes)}{{/if_eq}}
        </div>
      </div>
    )
  }
}

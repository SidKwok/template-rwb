import React, { Component } from 'react'
import './Hello.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'Hello World!'
    }
  }
  render () {
    return (
      <div id='Hello'>
        <div className='msg'>{this.state.msg}</div>
        {{#redux}}
        <p className='doc'>
          <i className='redux'>Redux's</i> <a href='http://redux.js.org/' target='_blank'>doc</a>
          ( or <a href='http://cn.redux.js.org/' target='_blank'>zh-doc</a> )
        </p>
        {{/redux}}
        {{#router}}
        <p className='doc'>
          <i className='router'>react-router's</i> <a href='
              {{~#if_eq routerVersion "v3"}}https://github.com/ReactTraining/react-router/tree/v3/docs{{/if_eq~}}
              {{~#if_eq routerVersion "v4"}}https://reacttraining.com/react-router/web/example/basic{{/if_eq~}}
              ' target='_blank'>doc</a>{{#if_eq routerVersion "v3"}}
          ( or <a href='http://react-guide.github.io/react-router-cn/index.html' target='_blank'>zh-doc</a> ){{/if_eq}}
        </p>
        {{/router}}
      </div>
    )
  }
}

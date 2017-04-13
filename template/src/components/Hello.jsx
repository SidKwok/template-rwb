import React from 'react'
import PropTypes from 'prop-types'
import './Hello.css'

const Hello = ({ msg }) => (
  <div id='Hello'>
    <h2>{msg}</h2>
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
        ' target='_blank'>doc</a>
      ( or <a href='
        {{~#if_eq routerVersion "v3"}}http://react-guide.github.io/react-router-cn/index.html{{/if_eq~}}
        {{~#if_eq routerVersion "v4"}}https://reacttraining.cn/web/guides/quick-start{{/if_eq~}}
        ' target='_blank'>zh-doc</a> )
    </p>
    {{/router}}
  </div>
)

Hello.prototype.propTypes = {
  msg: PropTypes.string
}

export default Hello

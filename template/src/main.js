import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
{{#redux}}
import { Provider } from 'react-redux'
import configureStore from '$redux/store/configureStore'

const store = configureStore()
{{/redux}}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
    {{#if redux}}
      <Provider store={store}>
        <Component />
      </Provider>
    {{else}}
      <Component />
    {{/if}}
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}

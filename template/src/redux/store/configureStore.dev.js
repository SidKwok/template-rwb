import { createStore{{#if_eq devtools "normal"}}, compose{{/if_eq}} } from 'redux'
import rootReducer from '../reducers/index'
{{#if_eq devtools "normal"~}}
import { persistState } from 'redux-devtools'
import DevTools from 'components/DevTools'

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
)
{{/if_eq}}

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    {{#if_eq devtools "normal"}}
    enhancer
    {{/if_eq}}
    {{#if_eq devtools "browser"}}
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    {{/if_eq}}
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

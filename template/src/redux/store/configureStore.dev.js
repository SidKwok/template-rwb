import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
import middlewares from './middlewares'
{{#if_eq devtools "normal"~}}
import { persistState } from 'redux-devtools'
import DevTools from 'components/DevTools'

{{/if_eq}}
const enhancer = compose(
  middlewares,
  {{#if_eq devtools "normal"}}
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
  {{/if_eq}}
  {{#if_eq devtools "browser"}}
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  {{/if_eq}}
)

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

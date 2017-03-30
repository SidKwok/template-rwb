import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
import middlewares from './middlewares'
{{#if_eq devtools "normal"~}}
import { persistState } from 'redux-devtools'
import DevTools from 'components/DevTools'

{{/if_eq}}
{{#if_eq devtools "browser"}}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(middlewares)
{{/if_eq}}
{{#if_eq devtools "normal"}}
const enhancer = compose(
  middlewares,
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

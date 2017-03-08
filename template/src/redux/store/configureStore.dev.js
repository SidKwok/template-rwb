import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
{{#if_eq devtools "normal"~}}
import { persistState } from 'redux-devtools'
import DevTools from 'components/DevTools'

{{/if_eq}}
const enhancer = compose(
  {{#if_eq devtools "normal"~}}
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
  // you can apply you middleware here
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

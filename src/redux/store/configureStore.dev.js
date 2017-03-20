import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
import { persistState } from 'redux-devtools'
import DevTools from 'components/DevTools'

const enhancer = compose(
DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
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

import MainView from 'views/MainView'
import SyncView from 'views/SyncView'
{{#if_eq routerVersion "v4"~}}
import Loadable from 'react-loadable'
{{/if_eq}}

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: '/sync',
        component: SyncView
      },
      {
        path: '/async',
        {{#if_eq routerVersion "v3"}}
        getComponent (nextState, cb) {
          (async () => {
            const view = await import('views/AsyncView')
            cb(null, view.default)
          })()
        }
        {{/if_eq}}
        {{#if_eq routerVersion "v4"}}
        component: Loadable({
          loader: () => import(`views/AsyncView`),
          // if you have your own loading component,
          // you should consider add it here
          loading: () => null
        })
        {{/if_eq}}
      }
    ]
  }
]

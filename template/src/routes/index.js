import Loadable from 'react-loadable'
import MainView from 'views/MainView'
import SyncView from 'views/SyncView'

const AsyncView = Loadable({
  loader: () => import('views/AsyncView'),
  // if you have your own loading component,
  // you should consider add it here
  loading: () => null
})

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
        component: AsyncView
      }
    ]
  }
]

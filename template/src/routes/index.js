import loadable from 'loadable-components'
import MainView from 'views/MainView'
import SyncView from 'views/SyncView'

// To see more options in https://github.com/smooth-code/loadable-components
const AsyncView = loadable(() => import('views/AsyncView'))

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

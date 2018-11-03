import React, { Suspense } from 'react'
import MainView from 'views/MainView'
import SyncView from 'views/SyncView'

// https://reactjs.org/docs/code-splitting.html#suspense
const AsyncView = React.lazy(() => import(/* webpackChunkName: "async" */ 'views/AsyncView'))

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
        component: () => (
          <Suspense fallback={<div>Loading</div>}>
            <AsyncView />
          </Suspense>
        )
      }
    ]
  }
]

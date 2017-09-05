import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'
import './MainView.css'

const MainView = ({ route }) => (
  <div className='main-view'>
    <div className='btn-group'>
      <Link to='/sync' className='btn' activeClassName='active'>To Sync</Link>
      <Link to='/async' className='btn' activeClassName='active'>To Async</Link>
    </div>
    <div className='view'>
      {renderRoutes(route.childRoutes)}
    </div>
  </div>
)

MainView.prototype.propTypes = {
  route: PropTypes.object
}

export default MainView

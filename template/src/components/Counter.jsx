import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '$redux/actions'

import './Counter.css'

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

const Counter = ({ counter, actions }) => (
  <a className='counter'
    href='javascript: void(0)'
    onClick={actions.increment}>
    {counter.count}
  </a>
)

Counter.prototype.propTypes = {
  actions: PropTypes.object,
  counter: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '$redux/actions'

import './Counter.css'

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch)
})

const Counter = ({ count, increment }) => (
  <a className='counter'
    href='javascript: void(0)'
    onClick={increment}>
    {count}
  </a>
)

Counter.prototype.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

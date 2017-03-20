import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '$redux/actions'

import './Counter.css'

class Counter extends Component {
  static propTypes = {
    actions: PropTypes.object,
    counter: PropTypes.object
  }
  handleClick = () => {
    this.props.actions.increment()
  }
  render () {
    return (
      <a className='counter'
        href='javascript: void(0)'
        onClick={this.handleClick}>
        {this.props.counter.count}
      </a>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

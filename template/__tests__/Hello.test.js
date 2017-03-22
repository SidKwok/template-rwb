import React from 'react'
import Hello from '../src/components/Hello.jsx'
import { shallow } from 'enzyme'

describe('<Hello />', () => {
  it('should pass the prop correctly', () => {
    const str = 'Hello World'
    expect(shallow(<Hello msg={str} />).instance().props.msg).toEqual(str)
  })
})

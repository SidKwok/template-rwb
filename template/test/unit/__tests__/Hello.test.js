import React from 'react'
import Hello from 'src/components/Hello.jsx'
import { shallow } from 'enzyme'

describe('<Hello />', () => {
  it('should pass the prop correctly', () => {
    const msg = 'Hello World'
    const wrapper = shallow(<Hello msg={msg} />)
    expect(wrapper.containsMatchingElement(
      <h2>{msg}</h2>
    )).toEqual(true)
  })
})

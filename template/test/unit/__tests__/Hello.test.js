import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Hello from 'src/components/Hello.jsx'

Enzyme.configure({ adapter: new Adapter() })

describe('<Hello />', () => {
  it('should pass the prop correctly', () => {
    const msg = 'Hello World'
    const wrapper = shallow(<Hello msg={msg} />)
    expect(wrapper.containsMatchingElement(
      <h2>{msg}</h2>
    )).toEqual(true)
  })
})

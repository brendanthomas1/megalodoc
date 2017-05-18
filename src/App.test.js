import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

it('renders the default view', () => {
  const component = renderer.create(<App></App>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

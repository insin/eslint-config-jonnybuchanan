// This file should pass linting based on the tweaks made to the standard,
// standard-jsx and standard-react presets.
import createReactClass from 'create-react-class'
import t from 'prop-types'
import React from 'react'
import {Route} from 'react-router'

// Allow == for typeof, which always returns a string
// Require Stroustrup brace style - else/catch etc. on a new line
if (typeof global == 'object') {
  console.log('global')
}
else if (typeof window == 'object') {
  console.log('window')
}

// Braces can be on same line
if (window.__DATA__) { console.log('data') }

// A space after function name convention is not enforced either way
function space () {
  return 'space!'
}
function noSpace() {
  // Use backticks for strings if you want
  return `no space!`
}

// void can be used to force a function expression insted of paren wrapping
void function() {
  console.log('IIFE')
}()

// It's ok to use let for variables which aren't re-assigned
// Dangling commas are allowed on multiline literals
let object = {
  a: 1,
  // You can quote props whenever you like
  'b': 2,
  c: 3,
}
let array = [
  1,
  2,
  3,
]
console.log(object, array)

// Use square bracket notation instead of dot notation when you like
let b = object['b']
console.log(b)

// Indentation isn't enforced on member expressions
object.a
      .b
      .c()

let OtherComponent = () => <h2>Test</h2>

// The babel-eslint parser is used to support use of async/await
async function fetchStories(subreddit) { // eslint-disable-line no-unused-vars
  // Object literals don't have to have spaces inside their braces
  var req = await window.fetch(`https://www.reddit.com/r/${subreddit}.json`, {mode: 'cors'})
  var json = await req.json()
  return json
}

// Spaces around generator function stars are not enforced either way
function* generator1() { // eslint-disable-line no-unused-vars
  yield '1'
}
function * generator2() { // eslint-disable-line no-unused-vars
  yield '2'
}
function *generator3() { // eslint-disable-line no-unused-vars
  yield '3'
}

let TestComponent = createReactClass({
  propTypes: {
    // It should be ok to declare props and not use them
    // e.g. some are needed for ownProps usage with Redux
    id: t.string.isRequired,
  },
  render() {
    // Multiline JSX statements don't need wrapping parens
    // Indentation of closing tag isn't enforced as it prevents return <tag>\n
    return <div className="test" onClick={() => { console.log('click') }}>
      {/* Declaration of propTypes is not enforced */}
      <h1>Test {this.props.name}</h1>
      {/* Self-closing of components without children is not enforced */}
      <OtherComponent></OtherComponent>
      {`${space()} ${noSpace()}`}
      {/* Spacing before self-closing is not enforced */}
      <OtherComponent test/>
      <OtherComponent test />
      Unescaped "quotes" 'are' allowed {/* but unescaped > and } aren't */}
      <Route
        path="child1"
        getComponent={
          (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./child1/Child1').default)
            })
            // Attribute indentation isn't enforced, so lining up the closing
            // brace below with the start of the function expression is ok
          }
        }
      />
    </div>
  }
})

class AnotherComponent extends React.Component {
  classProperty = true

  boundMethodViaClassProperty = (e) => {
    e.byGum()
  }

  render() {
    return <TestComponent/>
  }
}

export default AnotherComponent

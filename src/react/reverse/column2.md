## Consumer
A React component that subscribes to context changes. This lets you subscribe to a context within a function component.
```js
<Consumer>
  {value => /* render something based on the context value */}
</Consumer>
```
Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

# Routing
React Router allow you to route your application easily
```js
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './home'
import About from './about'
import Page404 from './404'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}
ReactDOM.render(<Routes />, document.getElementById('root'))
```

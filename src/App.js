import React from 'react'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Details from './Details';
import NextTodo from './components/NextTodo';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/details/:id`}>
            <Details />
          </Route>
          <Route path={`/nextpage/:newId`}>
            <NextTodo />
          </Route>




        </Switch>
      </div>
    </Router>
  )
}

export default App

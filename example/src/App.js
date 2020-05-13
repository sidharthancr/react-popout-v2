import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Examples from './examples'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Container from 'react-bootstrap/Container'

export default function App() {
  return (
    <Router basename='/react-popout-v2'>
      <div>
        <Switch>
          <Route path='/popout'>
            <Popout />
          </Route>
          <Route path='/'>
            <Examples />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Popout() {
  return (
    <Jumbotron>
      <Container>
        <h2>Popout Page</h2>
      </Container>
    </Jumbotron>
  )
}

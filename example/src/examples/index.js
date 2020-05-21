import React from 'react'

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import NormalPopout from './NormalPopout'
import CloseOnParentUnload from './CloseOnParentUnload'
import OnCloseEventCallBack from './OnCloseEventCallBack'
import OnPopoutCreateCallBack from './OnPopoutCreateCallBack'
import CloseProgrammatically from './CloseProgrammatically'
import CrossOriginUrl from './CrossOriginUrl'

import 'bootstrap/dist/css/bootstrap.min.css'

const Examples = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>React Popout V2!</h1>
        <p>
          React popout is a util to handle the popout windows with ease and
          supports IE
        </p>
        <NormalPopout />
        <CloseOnParentUnload />
        <OnCloseEventCallBack />
        <OnPopoutCreateCallBack />
        <CloseProgrammatically />
        <CrossOriginUrl />
      </Jumbotron>
    </Container>
  )
}

export default Examples

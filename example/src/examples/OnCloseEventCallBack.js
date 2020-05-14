import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Alert from 'react-bootstrap/Alert'
import Popout from 'react-popout-v2'

const OnCloseEventCallBack = () => {
  const [isOpen, setOpen] = useState(false)
  const code = `
                <Popout
                  id={'ex3'}
                  url={'#/popout'}
                  reactDom={ReactDOM}
                  children={
                    <Container>
                      <Alert variant='success'>
                        This is a content of new popout!
                      </Alert>
                    </Container>
                  }
                   onClose={() => {
                           setOpen(false)
                           alert('On Close Event')
                          }}
                />`
  return (
    <>
      <h3>Example 3:</h3>
      <p>Call back to handle the popout window close[Alert user/stop user]</p>

      {!isOpen && (
        <Button variant='dark' onClick={() => setOpen(true)}>
          Open Popout
        </Button>
      )}
      {isOpen && (
        <Popout
          id={'ex3'}
          url={'#/popout'}
          reactDom={ReactDOM}
          children={
            <Container>
              <Alert variant='success'>This is a content of new popout!</Alert>
            </Container>
          }
          closeOnUnload={true}
          onClose={() => {
            setOpen(false)
            alert('On Close Event')
          }}
        />
      )}
      <Accordion className='mt-4'>
        <Accordion.Toggle as={Button} variant='link' eventKey='0'>
          Code
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <pre>{code}</pre>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </>
  )
}
export default OnCloseEventCallBack

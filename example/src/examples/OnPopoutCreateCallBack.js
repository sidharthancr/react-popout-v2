import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Alert from 'react-bootstrap/Alert'
import Popout from 'react-popout-v2'

const OnPopoutCreateCallBack = () => {
  const [isOpen, setOpen] = useState(false)
  const code = `
                <Popout
                  id={'ex4'}
                  url={'#/popout'}
                  reactDom={ReactDOM}
                  children={
                    <Container>
                      <Alert variant='success'>
                        This is a content of new popout!
                      </Alert>
                    </Container>
                  }
                  onCreate={(window) => {
                               console.log("created window object", window)
                          }}
                  closeOnUnload={true}
                />`
  return (
    <>
      <h3>Example 4:</h3>
      <p>
        Call back to get created instance of popout window [Can be used to
        modify popup,Close, etc...]
      </p>
      <p>After click, open the console to find window object is printed</p>

      {!isOpen && (
        <Button variant='dark' onClick={() => setOpen(true)}>
          Open Popout
        </Button>
      )}
      {isOpen && (
        <Popout
          id={'ex4'}
          url={'#/popout'}
          reactDom={ReactDOM}
          children={
            <Container>
              <Alert variant='success'>This is a content of new popout!</Alert>
            </Container>
          }
          closeOnUnload={true}
          onCreate={(window) => {
            console.log('created window object', window)
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
export default OnPopoutCreateCallBack

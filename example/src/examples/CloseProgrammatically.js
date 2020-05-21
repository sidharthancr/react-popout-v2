import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Popout from 'react-popout-v2'

const CloseProgrammatically = () => {
  const [isOpen, setOpen] = useState(false)
  const childRef = useRef()

  const code = `
          const childRef = useRef()
              {isOpen && (
                  <Button
                    variant='dark'
                    onClick={() => {
                      setOpen(false)
                      childRef.current.close()
                    }}
                  >
                    Close Popout
                  </Button>
                )}
                <Popout
                  id={'ex5'}
                  url={'#/popout'}
                  reactDom={ReactDOM}
                  children={
                    <Container>
                      <Alert variant='success'>
                        This is a content of new popout!
                      </Alert>
                    </Container>
                  }
                  onClose={() => setOpen(false)}
                />`
  return (
    <>
      <h3>Example 5:</h3>
      <p>Close popout Programmatically</p>

      {!isOpen && (
        <Button variant='dark' onClick={() => setOpen(true)}>
          Open Popout
        </Button>
      )}
      {isOpen && (
        <Button
          variant='dark'
          onClick={() => {
            setOpen(false)
            childRef.current.close()
          }}
        >
          Close Popout
        </Button>
      )}
      {isOpen && (
        <Popout
          id={'ex5'}
          ref={childRef}
          url={'#/popout'}
          reactDom={ReactDOM}
          children={
            <Container>
              <Alert variant='success'>This is a content of new popout!</Alert>
            </Container>
          }
          onClose={() => setOpen(false)}
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
export default CloseProgrammatically

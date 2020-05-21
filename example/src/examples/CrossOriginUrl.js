import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Popout from 'react-popout-v2'

const CrossOriginUrl = () => {
  const [isOpen, setOpen] = useState(false)
  const [popoutWindow, setPopoutWindow] = useState(null)

  useEffect(() => {
    // if is open false but the popout window exist , it means window closed without calling on close. open the popout again
    if (!isOpen && popoutWindow) {
      setOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const code = `
            <Button
        variant='dark'
        onClick={() => {
          //on click the open
          if (isOpen) {
            if (popoutWindow) {
              //   If popout closed, set open false
              if (popoutWindow.closed) {
                setOpen(false)
              } else {
                //If popout already open and not closed , then focus
                popoutWindow.focus()
              }
            }
          } else {
            setOpen(true)
          }
        }}
      >
        Open Popout
      </Button>

      {isOpen && (
        <Popout
          id={'ex6'}
          url={'http://www.google.com'}
          reactDom={ReactDOM}
          closeOnParentUnload={true}
          children={
            <Container>
              <Alert variant='success'>This is a content of new popout!</Alert>
            </Container>
          }
          onCreate={(w) => {
            setPopoutWindow(w)
          }}
          onClose={() => setOpen(false)}
        />
      )}`
  return (
    <>
      <h3>Example 6:</h3>
      <p>
        Open Cross origin URL. Cross origin url does not support callback
        onbeforeunload event and could not add content to the page
      </p>

      <Button
        variant='dark'
        onClick={() => {
          //on click the open
          if (isOpen) {
            if (popoutWindow) {
              //   If popout closed, set open false
              if (popoutWindow.closed) {
                setOpen(false)
              } else {
                //If popout already open and not closed , then focus
                popoutWindow.focus()
              }
            }
          } else {
            setOpen(true)
          }
        }}
      >
        Open Popout
      </Button>

      {isOpen && (
        <Popout
          id={'ex6'}
          url={'http://www.google.com'}
          reactDom={ReactDOM}
          closeOnParentUnload={true}
          children={
            <Container>
              <Alert variant='success'>This is a content of new popout!</Alert>
            </Container>
          }
          onCreate={(w) => {
            setPopoutWindow(w)
          }}
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
export default CrossOriginUrl

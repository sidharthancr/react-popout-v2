# react-popout-v2

> React popout is a util to handle the popout windows with ease\
> Size of plugin is Just **10KB** \
> Supports IE 11

[![NPM](https://img.shields.io/npm/v/react-popout-v2.svg)](https://www.npmjs.com/package/react-popout-v2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-popout-v2
```

## Usage

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Popout from 'react-popout-v2'

const MyComponent = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      {!isOpen && <button onClick={() => setOpen(true)}>Open Popout</button>}
      {isOpen && (
        <Popout
          url={'#/popout'}
          reactDom={ReactDOM}
          children={<div>This is a content of new popout!</div>}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
export default MyComponent
```

## Props

## reactDom: ReactDom [**REQUIRED**]

Pass react dom instance from parent component to popout. It helps to over come version discrepancy issue and reduce bundle size from 250KB to 10KB

## id: String

**Default value:** react-popout

Unique ID to find different popouts. If you are using multiple popouts its mandatory tp provide `id`

## url: String

**Default value:** about:black

Url to load in the popout, we can load another link or can be used to load the CSS.

## title: String

**Default value:** react-popout

Title of the popout window

## containerId: String

**Default value:** react-popout

Unique id for the popout content div.[Useful on CSS separation]

## children: ReactComponents/ Function

Popout content elements or function which accepts the popout window as param

## containerId: bool

**Default value:** false

Flag to close the popout on parent window unload event

## options: object

**Default value:** {}

Object representing window options. See [the docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Position_and_size_features) for reference.

Example:
`<Popout options={{left: '100px', top: '200px'}} />`

By default 500px wide, 400px high and centered over the window hosting the react component.

You can also specify a function with signature `(options, window) => { }` to perform calculations.
For example top is calculated with `(o, w) => ((w.innerHeight - o.height) / 2) + w.screenY`

## onClose: Function

Callback on popout close event

## onError: Function

Callback on popout creation error event

## parentWindow: Object

**Default value:** window

Pass window object to open from given window, it default to current window object

## onCreate: Function

Callback on popout creation event with param as created popout window

## License

MIT © [sidharthancr](https://github.com/sidharthancr)

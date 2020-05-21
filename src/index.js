import React, {
  useState,
  useEffect,
  useImperativeHandle,
  useLayoutEffect
} from 'react'
import { addHandler, removeHandler, checkCrossOriginUrl } from './utils'
import PropTypes from 'prop-types'

const DEFAULT_OPTIONS = {
  toolbar: 'no',
  location: 0,
  directories: 'no',
  status: 'no',
  menubar: 'no',
  scrollbars: 'yes',
  resizable: 'yes',
  width: 500,
  height: 400,
  top: (o, w) => (w.innerHeight - o.height) / 2 + w.screenY,
  left: (o, w) => (w.innerWidth - o.width) / 2 + w.screenX
}

const Popout = React.forwardRef(
  (
    {
      id,
      url,
      title,
      containerId,
      children,
      closeOnParentUnload,
      options,
      onClose,
      onError,
      parentWindow,
      reactDom,
      onCreate
    },
    ref
  ) => {
    const [childPopoutWindow, setChildPopoutWindow] = useState()
    const [container, setContainer] = useState()
    const ReactDOM = reactDom
    const isCrossOriginUrl = checkCrossOriginUrl(url)

    // onMount open the popout
    useLayoutEffect(() => {
      openPopoutWindow()

      //  onUnmount close the popout
      return onParentWindowUnload
    }, [])

    useEffect(() => {
      if (childPopoutWindow) {
        // Close any opened popout on parent window unload
        if (closeOnParentUnload) {
          // Close the popout on parent unload event [Refresh/Close]
          addHandler(parentWindow, 'beforeunload', onParentWindowUnload)
        }
        if (!isCrossOriginUrl) {
          //  Render popout component after window load
          addHandler(childPopoutWindow, 'load', () => {
            addHandler(
              childPopoutWindow,
              'beforeunload',
              onPopoutWindowUnloading
            )
            onPopoutWindowLoaded(childPopoutWindow)
          })
        }
        // Call the onCreate call back to parent window
        onCreate(childPopoutWindow)
      }
    }, [childPopoutWindow])

    useEffect(() => {
      if (container) {
        ReactDOM.render(children, container)
      }
    }, [container])

    useImperativeHandle(ref, () => ({
      // Ref to close the popout programmatically
      close() {
        onParentWindowUnload()
      }
    }))

    const createOptions = () => {
      const mergedOptions = { ...DEFAULT_OPTIONS, ...options }
      return Object.keys(mergedOptions)
        .map(
          (key) =>
            key +
            '=' +
            (typeof mergedOptions[key] === 'function'
              ? mergedOptions[key](mergedOptions, parentWindow)
              : mergedOptions[key])
        )
        .join(',')
    }

    const openPopoutWindow = () => {
      const popoutWindow = parentWindow.open(url, id, createOptions())
      //  On Error
      if (!popoutWindow) {
        onError()
        return
      }

      if (url === 'about:blank') {
        // If they have no specified a URL, then we need to forcefully call onPopoutWindowLoaded()
        onPopoutWindowLoaded(popoutWindow)
        if (!isCrossOriginUrl) {
          //  onPopoutWindowUnloading on before unload
          addHandler(popoutWindow, 'beforeunload', onPopoutWindowUnloading)
        }
      }
      setChildPopoutWindow(popoutWindow)
    }

    const onPopoutWindowUnloading = () => {
      onClose()
      if (container) {
        ReactDOM.unmountComponentAtNode(container)
      }
    }

    const onPopoutWindowLoaded = (popoutWindow) => {
      // container not yet created and we have content[Children] to show
      if (!container && children) {
        // Create container[parent div] if not exists
        popoutWindow.document.title = title
        const newContainer = popoutWindow.document.createElement('div')
        newContainer.id = containerId
        popoutWindow.document.body.appendChild(newContainer)
        setContainer(newContainer)
      }
    }

    const onParentWindowUnload = () => {
      if (childPopoutWindow) {
        childPopoutWindow.close()
      }
      removeHandler(parentWindow, 'beforeunload', onParentWindowUnload)
    }

    return null
  }
)

Popout.defaultProps = {
  id: 'react-popout',
  url: 'about:blank',
  title: 'Popout',
  containerId: 'react-popout-root',
  closeOnParentUnload: false,
  options: {},
  onClose: () => {},
  onError: () =>
    console.log(
      'Error on opening window please check, is popup blocker enabled?'
    ),
  parentWindow: window,
  onCreate: () => {}
}
Popout.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  containerId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  closeOnParentUnload: PropTypes.bool,
  options: PropTypes.object,
  onClose: PropTypes.func,
  onError: PropTypes.func,
  parentWindow: PropTypes.object,
  reactDom: PropTypes.object.isRequired,
  onCreate: PropTypes.func
}

export default Popout

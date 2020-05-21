export const addHandler = (el, eventName, eventHandler) => {
  if (el.addEventListener) {
    el.addEventListener(eventName, eventHandler)
  } else if (el.attachEvent) {
    el.attachEvent('on' + eventName, eventHandler)
  }
}

export const removeHandler = (element, eventName, eventHandler) => {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, eventHandler)
  } else if (element.detachEvent) {
    element.detachEvent('on' + eventName, eventHandler)
  }
}

export const checkCrossOriginUrl = (url) => {
  if (!url || url === 'about:blank') {
    return false
  }

  const parser = document.createElement('a')
  parser.href = url

  const current = window.location

  if (
    (parser.hostname && current.hostname !== parser.hostname) ||
    (parser.protocol && current.protocol !== parser.protocol)
  ) {
    return true
  }
  return false
}

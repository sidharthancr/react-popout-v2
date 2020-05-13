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

export function isElement(o: any): o is HTMLElement {
  if (typeof HTMLElement === 'function') return o instanceof HTMLElement
  return (
    o &&
    typeof o === 'object' &&
    o.nodeType === 1 &&
    typeof o.nodeName === 'string'
  )
}

export function isInputElement(o: any): o is HTMLInputElement {
  return isElement(o) && /^(input|select|textarea)$/i.test(o.tagName)
}

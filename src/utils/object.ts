export function isProp<T extends object>(
  prop: PropertyKey,
  obj: T
): prop is keyof T {
  return prop in obj
}

export function hasProp<T extends object, K extends PropertyKey>(
  obj: T,
  prop: K
): obj is T & Record<K, unknown> {
  return prop in obj
}

export function ownsProp<T extends object, K extends string>(
  obj: T,
  prop: K
): obj is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

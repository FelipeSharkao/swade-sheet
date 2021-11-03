interface ObjectConstructor {
  fromEntries<K extends PropertyKey, T>(
    iterable: Iterable<readonly [K, T]>
  ): { [k in K]: T }
}

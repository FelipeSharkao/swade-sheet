/** Run the reducer function for each value of `array` and return a array with the accumulated values */
export function accum<T, U>(
  reducer: (prev: U | undefined, item: T, idx: number) => U,
  array: readonly T[]
): U[]
export function accum<T, U>(
  reducer: (prev: U, item: T, idx: number) => U,
  array: readonly T[],
  initial: readonly [U, ...U[]]
): U[]
export function accum<T, U>(
  reducer: (prev: U | undefined, item: T, idx: number) => U,
  array: readonly T[],
  initial: readonly U[] = []
): U[] {
  return array.reduce(
    (acc, x, i) => [...acc, reducer(acc[acc.length - 1], x, i)],
    initial
  ) as U[]
}

export type propValue<T, R = string> = ((data?: T) => R) | R;

export function readPropValue<T, R = string>(value: propValue<T, R>, data: T): R {
  return typeof value === 'function' ? (value as (data?: T) => R)(data) : value;
}

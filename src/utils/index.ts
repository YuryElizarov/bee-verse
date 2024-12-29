export const addZeroForward = (string: string, needLength: number = 2) => string.length > needLength ? string : `${'0'.repeat(needLength - string.length)}${string}`;

export function generateArrayFrom(startIndex: number, length: number, content?: string | number) {
  return Array.from({length}, (_, i) => content !== undefined ? content : i + startIndex)
}

export function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  });
}

export const getTotalValue = (value: number | string): string => {
  if (typeof value === 'string') value = parseInt(value, 10)
  const decimals = value.toString().length
  switch (decimals) {
    case 4:
      return `${(value / 10 ** 3).toFixed(2)}k`
    case 7:
      return `${(value / 10 ** 6).toFixed(2)}m`
    default:
      return value.toString()
  }
}

export function numberWithSpaces(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const inputRegexInt = /^\d*$/; // match escaped "." characters via in a non-capturing group

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

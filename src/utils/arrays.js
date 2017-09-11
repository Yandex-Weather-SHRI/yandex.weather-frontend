export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/** @returns Случайный элемент из `arr` */
export function sample(arr) {
  return arr[getRandomInt(0, arr.length - 1)]
}

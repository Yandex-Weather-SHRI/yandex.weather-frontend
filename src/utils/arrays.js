/** @returns Случайный элемент из `arr` */
export function sample(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))]
}

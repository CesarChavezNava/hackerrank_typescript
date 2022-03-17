/*
 * Completa la función 'miniMaxSum'.
 * La función acepta INTEGER_ARRAY arr como parametro.
 */

export function miniMaxSum(arr: number[]): string {
  const sortedArray = arr.sort((a, b) => a - b);

  let sumMin: number = 0;
  let sumMax: number = 0;

  let leftPointer: number = 0;
  let rightPointer: number = 4;

  while (leftPointer < 4 && rightPointer > 0) {
    sumMin += sortedArray[leftPointer];
    sumMax += sortedArray[rightPointer];

    leftPointer++;
    rightPointer--;
  }

  return `${sumMin} ${sumMax}`;
}

/*
 * Completar la función 'flippingMatrix'
 *
 * La función esta previsto que retorne un INTEGER
 * La función acepta 2D_INTEGER_ARRAY matriz como parametro
 */

export function flippingMatrix(matrix: number[][]): number {
  const quadrantLength: number = matrix.length / 2;
  let maxNumberQuadrant: number = 0;
  let sumQuadrantTopLeft: number = 0;

  for (let row = 0; row < quadrantLength; row++) {
    for (let column = 0; column < quadrantLength; column++) {
      maxNumberQuadrant = matrix[row][column];
      maxNumberQuadrant = Math.max(
        matrix[row][getQuadrantIndex(matrix.length, column)],
        maxNumberQuadrant
      );
      maxNumberQuadrant = Math.max(
        matrix[getQuadrantIndex(matrix.length, row)][column],
        maxNumberQuadrant
      );
      maxNumberQuadrant = Math.max(
        matrix[getQuadrantIndex(matrix.length, row)][
          getQuadrantIndex(matrix.length, column)
        ],
        maxNumberQuadrant
      );

      sumQuadrantTopLeft += maxNumberQuadrant;
    }
  }

  return sumQuadrantTopLeft;
}

function getQuadrantIndex(matrixLength: number, position: number): number {
  return matrixLength - position - 1;
}

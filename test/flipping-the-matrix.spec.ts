import { flippingMatrix } from "../src/flipping-the-matrix/flipping-the-matrix";

describe("Flipping the matrix", () => {
  test("Ejemplo de caso de prueba 0, Ejemplo de la descripción", () => {
    const expected: number = 414;

    const matrix: number[][] = [
      [112, 42, 83, 119],
      [56, 125, 56, 49],
      [15, 78, 101, 43],
      [62, 98, 114, 108],
    ];

    const result: number = flippingMatrix(matrix);
    expect(result).toStrictEqual(expected);
  });
});

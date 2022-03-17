import { miniMaxSum } from "../src/mini-max-sum/mini-max-sum";

describe("Mini-Max Sum", () => {
  test("Ejemplo de caso de prueba 0, Cuando el arreglo esta ordenado", () => {
    const expected: string = "10 14";

    const arr: number[] = [1, 2, 3, 4, 5];

    const result: string = miniMaxSum(arr);
    expect(result).toStrictEqual(expected);
  });

  test("Ejemplo de caso de prueba 1, Cuando el arreglo no esta ordenado", () => {
    const expected: string = "299 9271";

    const arr: number[] = [7, 69, 2, 221, 8974];

    const result: string = miniMaxSum(arr);
    expect(result).toStrictEqual(expected);
  });
});

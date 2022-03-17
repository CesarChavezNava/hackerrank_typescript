import { birthday } from "../src/subarray-division-1/subarray-division-1";

describe("Subarray Division 1", () => {
  test("Ejemplo de caso de prueba 0, es el ejemplo de la descripción", () => {
    const expected: number = 2;

    const s: number[] = [2, 2, 1, 3, 2];
    const d: number = 4;
    const m: number = 2;

    const result: number = birthday(s, d, m);
    expect(result).toEqual(expected);
  });

  test("Ejemplo de caso de prueba 1, cuando el chocolate no puede ser cortado", () => {
    const expected: number = 0;

    const s: number[] = [1, 1, 1, 1, 1, 1];
    const d: number = 3;
    const m: number = 2;

    const result: number = birthday(s, d, m);
    expect(result).toEqual(expected);
  });

  test("Ejemplo de caso de prueba 2, cuando el chocolate solo puede ser cortado a la mitad", () => {
    const expected: number = 1;

    const s: number[] = [4];
    const d: number = 4;
    const m: number = 1;

    const result: number = birthday(s, d, m);
    expect(result).toEqual(expected);
  });
});

import { pangrams } from "../src/pangrams/pangrams";

describe("Pangrams", () => {
  test("Ejemplo de caso de prueba 0, Es un pangrama", () => {
    const expected: string = "pangram";

    const s: string =
      "We promptly judged antique ivory buckles for the next prize";

    const result: string = pangrams(s);
    expect(result).toStrictEqual(expected);
  });

  test("Ejemplo de caso de prueba 1, No es un pangrama", () => {
    const expected: string = "not pangram";

    const s: string = "We promptly judged antique ivory buckles for the prize";

    const result: string = pangrams(s);
    expect(result).toStrictEqual(expected);
  });
});

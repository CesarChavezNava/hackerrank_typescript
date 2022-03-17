/*
 * Se espera que la función regres un INTEGER.
 * La función acepta los siguientes parametros:
 *  1. INTEGER_ARRAY s (squares)
 *  2. INTEGER d (day)
 *  3. INTEGER m (month)
 */

export function birthday(
  squares: number[], // Los cuadrados del chocolate
  day: number, // Día de nacimiento de Ron
  month: number // Mes de nacimiento de Ron
): number {
  let squaresSum: number = 0; // La suma de los cuadrados
  let initSquare: number = 0; // Index del cuadrado inicial
  let ways: number = 0; // Formas de dividir el chocolate

  while (initSquare < squares.length) {
    for (let currentSquare = 0; currentSquare < month; currentSquare++) {
      squaresSum += squares[initSquare + currentSquare];
    }

    if (squaresSum === day) ways += 1;

    squaresSum = 0;
    initSquare++;
  }

  return ways;
}

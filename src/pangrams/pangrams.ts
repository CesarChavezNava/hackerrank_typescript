/*
 * Completa la función 'pangrams'.
 *
 * Se espera que la función devuelva un STRING.
 * la función accepta un s: STRING como parametro.
 */

export function pangrams(s: string): string {
  let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  s = s.toLowerCase();

  for (const letter of alphabet) {
    if (!s.includes(letter)) return "not pangram";
  }

  return "pangram";
}

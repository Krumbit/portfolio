/**
 *
 * @param url The url to extract the username from
 * @returns The extracted username
 */
export function extractTwitterUsername(url: string) {
  const usernameRegex = /twitter\.com\/([^/]+)/;
  const match = url.match(usernameRegex);

  return match ? match[1] : undefined;
}

/**
 *
 * @param number Number above which to get the closest multiple of
 * @param multiple The multiple to use
 * @returns The lowest mulitple of the provided multiple greater than or equal to the provided number
 */
export function lowestMultipleAboveNumber(number: number, multiple: number) {
  const r = number % multiple;
  return r === 0 ? number : number + (multiple - r);
}

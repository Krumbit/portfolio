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

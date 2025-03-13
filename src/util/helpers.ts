/**
 *
 * @param url The url to extract the username from
 * @returns The extracted username
 */
export function extractXUsername(url: string) {
  const usernameRegex = /x\.com\/([^/]+)/;
  const match = url.match(usernameRegex);

  return match ? match[1] : undefined;
}

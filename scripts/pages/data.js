export async function getData (url) {
  const requestURL = url

  const request = new Request(requestURL)
  const response = await fetch(request)
  const data = await response.json()

  return data
}

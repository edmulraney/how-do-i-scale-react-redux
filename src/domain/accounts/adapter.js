export default function adapter(response) {
  return response.map(entity => ({
    id: response.uglyId,
    name: response.alias,
  }))
}

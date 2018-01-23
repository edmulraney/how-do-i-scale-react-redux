export default function adapter(raw) {
  return {
    id: raw.uglyId,
    name: raw.badName,
  }
}

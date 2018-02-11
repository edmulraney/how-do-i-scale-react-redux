export default function adapter(response) {
  return response.map(entity => ({
    id: entity.account_ID,
    name: entity.account_alias,
    balance: entity.account_funds,
  }))
}

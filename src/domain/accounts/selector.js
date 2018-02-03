const getAccounts = state => state.accounts

export {
  getAccounts,
}

export default function selector(state) {
  return {
    accounts: getAccounts(state),
  }
}

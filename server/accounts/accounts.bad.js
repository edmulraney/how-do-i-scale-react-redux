let db = [{
  account_ID: 1,
  account_alias: 'Savings',
  account_funds: 1250,
}, {
  account_ID: 2,
  account_alias: 'ISA',
  account_funds: 10000,
}, {
  account_ID: 3,
  account_alias: 'Current',
  account_funds: 800,
}]

const accountTransactions = {
  1: [1, 2, 3],
  2: [1, 2, 3],
  3: [1, 2, 3],
}

const getAccountTransactions = id => accountTransactions[id]

export default {
  getAccountTransactions,
}

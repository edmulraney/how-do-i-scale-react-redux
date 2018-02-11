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


const fetch = () => db
const fetchById = id => db.find(dbAccount => dbAccount.account_ID === id)

const create = account => db.push({
  account_ID: db[db.length],
  account_alias: account.name,
  account_fund: 0,
})

const update = account => {
  let dbAccount = fetchById(account.id)
  if (dbAccount) {
    dbAccount = account
  }
}

const patch = account => {
  let dbAccount = fetchById(account.id)
  if (dbAccount) {
    dbAccount.account_alias = account.name
  }
}

const remove = id => db = db.filter(dbAccount => dbAccount.account_ID === id)

module.exports = {
  fetch,
  fetchById,
  create,
  update,
  patch,
  remove,
}

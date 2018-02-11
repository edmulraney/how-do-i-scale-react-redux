import React from 'react'
import Account from './account'
import PropTypes from 'prop-types'

export default function Accounts(props) {
  return (
    <ul>
      {props.accounts.map(account => <Account key={account.id} account={account} />)}
    </ul>
  )
}

Accounts.propTypes = {
  accounts: PropTypes.array,
}

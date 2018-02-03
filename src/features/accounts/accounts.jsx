import React from 'react'
import Account from './account'
import PropTypes from 'prop-types'

export default function Accounts(props) {
  console.log(props)
  return (
    <ul>
      {props.accounts.map(account => <Account account={account} />)}
    </ul>
  )
}

Accounts.propTypes = {
  accounts: PropTypes.array,
}

Accounts.defaultProps = {}

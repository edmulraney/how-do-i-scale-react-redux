import React from 'react'
import Account from './account'
import PropTypes from 'prop-types'

export default function Accounts(props) {
  return (
    <ul>
      {props.entities.map(entity => <Account account={entity} />)}
    </ul>
  )
}

Accounts.propTypes = {
  accounts: PropTypes.array,
}

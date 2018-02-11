import React from 'react'
import PropTypes from 'prop-types'

export default function Account(props) {
  return (<li>{props.account.name} - {props.account.balance} available</li>)
}

Account.propTypes = {
  account: PropTypes.object.isRequired,
}

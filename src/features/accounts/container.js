import React from 'react'
import { connect } from 'react-redux'
import { selector } from '../../domain/accounts'
import Accounts from './accounts'

function Container(props) {
  return (
    <Accounts accounts={props.accounts} />
  )
}

export default connect(selector)(Container)

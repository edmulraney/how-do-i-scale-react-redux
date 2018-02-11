import React from 'react'
import { connect } from 'react-redux'
import { Loader } from 'components'
import { accounts } from '../../domain'
import Accounts from './accounts'

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
    if (this.props.isLoading) {
      return (<Loader />)
    }

    return (
      <Accounts accounts={this.props.entities} />
    )
  }
}

export default connect(accounts.selector, {
  fetchAccounts: accounts.actions.fetchAccounts,
})(Container)

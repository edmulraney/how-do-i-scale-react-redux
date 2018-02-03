import React from 'react';
import { Route, Link } from 'react-router-dom'
import {
  Dashboard,
  Accounts,
} from '../features'
import './app.css'

const App = () => (
  <div>
    <header>
      <Link to="/">Dashboard</Link>
      <Link to="/accounts">Accounts</Link>
      <Link to="/users">Users</Link>
    </header>

    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/users" component={Users} />
    </main>
  </div>
)

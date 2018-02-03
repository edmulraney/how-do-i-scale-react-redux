import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
 } from 'react-router-dom'
import './app.css'
import {
  Dashboard,
  Accounts,
} from '../features'

export default function App() {
  return (
    <div>
      <header>
        <Link to="/">Dashboard</Link>
        <Link to="/accounts">Accounts</Link>
      </header>

      <main>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/accounts" component={Accounts} />
          </div>
        </BrowserRouter>
      </main>
    </div>
  )
}

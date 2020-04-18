import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import NotfoundPage from './../components/NotfoundPage'

import loginPage from './../components/loginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter =() => (
    <Router history = {history}>
         <div>
              <Switch>
                <Route path="/" component={loginPage} exact={true}  />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}  />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component ={HelpPage} />
                <Route component={NotfoundPage} />
            </Switch> 
         </div>   
    </Router>
);

export default AppRouter
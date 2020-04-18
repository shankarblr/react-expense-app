import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogOut} from './../actions/auth';
import { connect } from 'react-redux';

export const Header = ({startLogOut}) => (
    <header>
        <h1>Expense App</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">ExpenseHelp</NavLink>
        <button onClick ={startLogOut} >Log Out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined,mapDispatchToProps)(Header)
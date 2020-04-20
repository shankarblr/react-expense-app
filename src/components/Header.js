import React from 'react';
import {Link} from 'react-router-dom';
import {startLogOut} from './../actions/auth';
import { connect } from 'react-redux';

export const Header = ({startLogOut}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard" activeClassName="is-active"><h1>Expense App</h1></Link>
                <button className="button button--link"  onClick ={startLogOut} >Log Out</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined,mapDispatchToProps)(Header)
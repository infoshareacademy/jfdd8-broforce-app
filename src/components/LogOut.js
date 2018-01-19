import React, {Component} from 'react';
import './App.css';
import logo from '../img/logo1.svg';
import {signOut} from "../state/auth";
import {connect} from 'react-redux';

class LogOut extends Component {
    render() {
        return (


            <div className="top wrapper">

                    <img src={logo} className="App-logo" alt="logo1"/>

                    {this.props.user.email}

                    <button className="logout-button"
                            onClick={this.props.signOut}
                    >
                        Wyloguj
                    </button>


            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.auth.user
    }),
    {signOut}
)(LogOut)


import React, { Component } from 'preact-compat';
import { connect } from 'preact-redux';
import { push } from 'react-router-redux';

/**
* Navigation component
* @params {Object} props object
* @class Navigation
*/
const Navigation = (props) => (
    <nav className="jd-navigation-wrapper">
        <ul className="jd-navigation">
            <li className="jd-nav-item"><a to="/" className="icon icon-home" onClick={props.navigateTo.bind(this, '/')}><span>Home</span></a></li>
            <li className="jd-nav-item"><a to="/post" className="icon icon-heart" onClick={props.navigateTo.bind(this, '/post')}><span>Likes</span></a></li>
            <li className="jd-nav-item"><a to="/products" className="icon icon-camera" onClick={props.navigateTo.bind(this, '/products')}><span>Photos</span></a></li>
            <li className="jd-nav-item"><a to="/account" className="icon icon-user" onClick={props.navigateTo.bind(this, '/account')}><span>My Profile</span></a></li>
            <li className="jd-nav-item"><a to="/search" className="icon icon-search" onClick={props.navigateTo.bind(this, '/search')}><span>search</span></a></li>
        </ul>
    </nav>
);

/**
 * mapStateToProps State to Props
 * @return {Object} location object
 */
const state = () => {
    return {
        location: state.location
    };
};

/**
 * mapDispatchToProps State to Props
 * @param {function} dispatch function
 * @return {Object}
 */
const mapDispatchToProps = (dispatch) => ({
    navigateTo: (location) => {
        dispatch(push(location));
    }
});

export default connect(state, mapDispatchToProps)(Navigation);

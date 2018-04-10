import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';

class SideNavBar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
            <span className="logo"><Link to="/browse"><img src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png" className="logo" /></Link></span>
            <ul className="sidebar-main">
                <li className="sidebar-divider"></li>
                <li className="search"><NavLink to="/search" activeClassName="selected"><p>Search</p> <i className="fa fa-search"></i></NavLink></li>
                <li className="sidebar-divider"></li>
                <li className="home"><NavLink exact to="/browse" activeClassName="selected">Home</NavLink></li>
                <li className="your-music"><NavLink exact to="/collection/playlists" activeClassName="selected">Your Music</NavLink></li>
                <li className="sidebar-divider"></li>
            </ul>
                <ul className="recently-played-music">
                    <li className="recently-played">Recently Played</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                    <li>Azealia</li>
                </ul>
        </aside>
        );
    }
}

export default SideNavBar;
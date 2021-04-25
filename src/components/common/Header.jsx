import React from 'react'

export const Header = () => {
    return (
        <nav className="header__navbar">
            <div className="header__navbar-logo">Logo</div>
            <ul className="header__navbar-list">
                
                <li className="header__navbar-list-item">Login</li>
                <li className="header__navbar-list-item">Sign Up</li>
            </ul>
        </nav>
    )
}

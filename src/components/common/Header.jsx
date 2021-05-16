import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import avatar from "../../assets/img/avatar.svg";

export const Header = () => {
  const dispatch = useDispatch();
  const [displayMenu, setdisplayMenu] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleDisplayMenu = () => {
    setdisplayMenu(!displayMenu);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    setdisplayMenu(false);
  };

  return (
    <>
      <nav className="header__navbar ">
        <div className="header__navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        {!user?.uid ? (
          <ul className="header__navbar-list animate__animated animate__fadeIn">
            <NavLink
              className="header__navbar-list-item "
              to="/auth/login"
              activeClassName="active"
            >
              <button className="btn ">Login</button>
            </NavLink>
            <NavLink
              className="header__navbar-list-item"
              to="/auth/register"
              activeClassName="active"
            >
              <button className="btn ">Sign Up</button>
            </NavLink>
          </ul>
        ) : (
          <div className="header__user-nav animate__animated animate__fadeIn">
            <span>{user.displayName}</span>
            <img
              onClick={handleDisplayMenu}
              className="header__user-avatar"
              src={avatar}
              alt="avatar"
            ></img>
          </div>
        )}
      </nav>
      {displayMenu && (
        <ul className="header__user-menu animate__animated animate__fadeInDown animate__faster">
          <Link to="/user-profile">Profile</Link>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </>
  );
};

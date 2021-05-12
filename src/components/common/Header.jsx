import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
    <div>
      <nav className="header__navbar ">
        <div className="header__navbar-logo">Logo</div>
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
          <li>Profile</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

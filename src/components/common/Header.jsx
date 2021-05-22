import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import avatar from "../../assets/img/avatar.svg";
import logo from "../../assets/img/logo-resized.png";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [displayMenu, setdisplayMenu] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleDisplayMenu = () => {
    setdisplayMenu(!displayMenu);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    setdisplayMenu(false);
  };

  useEffect(() => {
    history.listen(() => setdisplayMenu(false));
  }, [history]);

  return (
    <>
      <nav className="header__navbar ">
        <Link to="/" style={{ height: "100%" }}>
          <img src={logo} alt="logo" className="header__navbar-logo" />
        </Link>

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

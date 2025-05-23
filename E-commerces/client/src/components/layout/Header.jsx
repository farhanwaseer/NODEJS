import React from "react";
import { NavLink,Link} from "react-router";
import { FcEngineering } from "react-icons/fc";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-white " to="/#">
          <FcEngineering />
              My Shop
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white " to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-white" to="/category">
                  Category
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink className="nav-link text-white" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link  text-white" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link  text-white">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

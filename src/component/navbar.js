import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => (
<>
  <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg `}>
    <div className="container-fluid">
      <Link  className="navbar-brand text-decoration-none text-light" to="#">{props.title ? props.title : "hehehe"}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              {/* <span className="">Homed</span> */}
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" >About</Link>
          </li>
          <li className="nav-item dropdown">
            <Link  className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled">Disabled</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        {/* Theme Toggler */}
        <div className="d-flex justify-content-end">
          <svg onClick={props.toggleMode} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            className={`bi bi-moon-stars m-2 text-${props.mode=="light" ? "dark" : "light" }`} viewBox="0 0 16 16">
            <path
              d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            <path
              d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // to set the title to string and also required
};
Navbar.defaultProps = {
  title: "defaultTitle", //If the title is not passed then it takes the default value.
};

export default Navbar;
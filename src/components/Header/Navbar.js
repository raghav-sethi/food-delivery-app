import React, { useState } from "react";

export default function Navbar() {
  const [modalState, setModalState] = useState(false);

  const loginHandler = () => {
    setModalState(true);
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div>
          <a className="navbar-brand" href="/">
            Meals.com
          </a>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item mx-3">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                onClick={loginHandler}
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light">
                Create an account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

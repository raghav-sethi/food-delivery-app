import React, { Fragment, useState } from "react";
import Modal from "./../UI/Modal";
export default function Navbar() {
  const [loginModalState, setLoginModalState] = useState(false);
  const [createAccountModalState, setCreateAccountModalState] = useState(false);

  const loginModalOpenHandler = () => {
    setLoginModalState(true);
  };
  const createAccountModalOpenHandler = () => {
    setCreateAccountModalState(true);
  };

  const modalCloseHandler = () => {
    setLoginModalState(false);
    setCreateAccountModalState(false);
  };

  return (
    <Fragment>
      {loginModalState && (
        <Modal
          title="Login"
          footerContent="Don't have account? Sign UP"
          onConfirmError={modalCloseHandler}
        />
      )}
      {createAccountModalState && (
        <Modal
          title="Sign Up"
          footerContent="Already have an account? Login"
          onConfirmError={modalCloseHandler}
        />
      )}
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
                  onClick={loginModalOpenHandler}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={createAccountModalOpenHandler}
                >
                  Create an account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

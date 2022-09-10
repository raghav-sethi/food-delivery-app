import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirmError} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={`${styles.header} d-flex justify-content-between`}>
        <h2>{props.title}</h2>
        <Button onClick={props.onConfirmError}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </header>
      <div className={styles.content}>
        <div>
          <button
            style={{ width: "100%" }}
            className="btn btn-outline-dark mt-3 mb-2 text-center"
          >
            Continue with Gmail
          </button>
        </div>
        <div>
          <button
            style={{ width: "100%" }}
            className="btn btn-outline-dark mb-4 text-center"
          >
            Continue with Facebook
          </button>
        </div>
      </div>
      <hr />
      <footer
        style={{ backgroundColor: " #212529" }}
        className={styles.actions}
      >
        <a href="/">{props.footerContent}</a>
      </footer>
    </Card>
  );
};

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirmError={props.onConfirmError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirmError={props.onConfirmError}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

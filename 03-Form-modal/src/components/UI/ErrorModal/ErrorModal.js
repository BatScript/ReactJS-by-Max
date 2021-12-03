import Card from "../Card/Card";
import Button from "../Button/Buttons";
import classes from "./errormod.module.css";
import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h1>{props.title}</h1>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <Button
        className={classes.action}
        onClick={props.onConfirm}
        buttonmessage="Okay "
      />
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

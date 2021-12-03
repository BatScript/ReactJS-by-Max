import Card from "../Card/Card";
import Button from "../Button/Buttons";
import classes from "./errormod.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
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
    </div>
  );
};

export default ErrorModal;

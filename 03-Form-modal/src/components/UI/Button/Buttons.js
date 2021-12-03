import styles from "./Buttons.module.css";
const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.buttonmessage}
    </button>
  );
};

export default Button;

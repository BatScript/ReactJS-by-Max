import styles from "./AddUsers.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Buttons";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
const AddUser = (props) => {
  const [inputvalue, inputchanger] = useState({
    name: "",
    age: "",
  });

  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault(event);
    if (
      inputvalue.name.trim().length === 0 ||
      inputvalue.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Enter Correct Value",
      });
    }
    if (inputvalue.age < 1) {
      setError({
        title: "Invalid Input",
        message: "Age must be > 0",
      });
    } else {
      props.newUser(inputvalue.name, inputvalue.age);
      // console.log(inputvalue.name, inputvalue.age);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const namechangehandler = (event) => {
    inputchanger({ ...inputvalue, [event.target.name]: event.target.value });
  };

  const agechangehandler = (event) => {
    inputchanger({ ...inputvalue, [event.target.name]: event.target.value });
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <label htmlFor="email">Name</label>
          <input name="name" type="text" onChange={namechangehandler} />
          <label htmlFor="email">Age</label>
          <input name="age" type="text" onChange={agechangehandler} />
          <Button buttonmessage="Add" onClick={onSubmitHandler} />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

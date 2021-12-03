import styles from "./AddUsers.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Buttons";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
const AddUser = (props) => {
  const nameChangeRef = useRef();
  const ageChangeRef = useRef();

  // const [inputvalue, inputchanger] = useState({
  //   name: "",
  //   age: "",
  // });

  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    console.log();
    event.preventDefault(event);
    if (
      nameChangeRef.current.value.trim().length === 0 ||
      ageChangeRef.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Enter Correct Value",
      });
    }
    if (ageChangeRef.current.value < 1) {
      setError({
        title: "Invalid Input",
        message: "Age must be > 0",
      });
    } else {
      props.newUser(nameChangeRef.current.value, ageChangeRef.current.value);
      nameChangeRef.current.value = "";
      ageChangeRef.current.value = "";
      // console.log(inputvalue.name, inputvalue.age);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  // const namechangehandler = (event) => {
  //   inputchanger({ ...inputvalue, [event.target.name]: event.target.value });
  // };

  // const agechangehandler = (event) => {
  //   inputchanger({ ...inputvalue, [event.target.name]: event.target.value });
  // };
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
          <input ref={nameChangeRef} type="text" />
          <label htmlFor="email">Age</label>
          <input ref={ageChangeRef} type="text" />
          <Button buttonmessage="Add" onClick={onSubmitHandler} />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

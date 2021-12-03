import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const titleChangehandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };
  // const [enteredExpense, setEnteredExpense] = useState("");
  // const expenseChangehandler = (event) => {
  //   setEnteredExpense(event.target.value);
  // };
  // const [enteredDate, setEnteredDate] = useState("");
  // const dateChangehandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangehandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangehandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangehandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: userInput.enteredTitle,
      price: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(formData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };
  const [toggle, toggleHandle] = useState(false);

  const Toggle = () => {
    if (toggle === false) {
      toggleHandle(true);
    } else {
      toggleHandle(false);
    }
  };

  const noSubmit = (event) => {
    event.preventDefault();
  };

  let element = (
    <form onSubmit={noSubmit} className="expenseForm">
      <button onClick={Toggle}>Show form</button>
    </form>
  );

  if (toggle) {
    element = (
      <form onSubmit={submitHandler} className="expenseForm">
        <label>Item</label>
        <input
          value={userInput.enteredTitle}
          onChange={titleChangehandler}
          type="text"
          name="expenseItem"
        />
        <label>Expense</label>
        <input
          value={userInput.enteredAmount}
          onChange={amountChangehandler}
          type="text"
          name="expenseItem"
        />
        <label>Date</label>
        <input
          value={userInput.enteredDate}
          onChange={dateChangehandler}
          type="date"
          name="expenseItem"
        />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
        <button onClick={Toggle}>Hide</button>
      </form>
    );
  }

  return <div>{element}</div>;
}

export default ExpenseForm;

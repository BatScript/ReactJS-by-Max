import { useState } from "react";
import Expense from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/newExpense";
const dataBase = [
  {
    title: "Television",
    date: new Date("2021-03-01"),
    price: 15500,
  },
  {
    title: "Fee",
    date: new Date("2020-04-07"),
    price: 60000,
  },
  {
    title: "Laptop",
    date: new Date("2019-09-015"),
    price: 45600,
  },
  {
    title: "Courses",
    date: new Date("2018-011-26"),
    price: 10000,
  },
];
function App() {
  const [item, addItem] = useState(dataBase);

  const addExpenseHandler = (expense) => {
    addItem((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1 className="text-center">
        <strong>Let's get started!</strong>
      </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={item} />
    </div>
  );
}

export default App;

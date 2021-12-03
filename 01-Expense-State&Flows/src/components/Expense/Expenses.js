import ExpenseItem from "./ExpenseItems";
import Filter from "../Filter/Filter";
import Card from "../UI/Cards";
import ExpenseChart from "./ExpensesChart";
import { useState } from "react";

function Expense(props) {
  const dataBase = props.data;
  const [filteredYear, setFilteredYear] = useState("2011");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = dataBase.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>Nothing Found</p>;
  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((val) => (
      <ExpenseItem
        key={Math.random()}
        title={val.title}
        date={val.date}
        price={val.price}
      />
    ));
  }
  return (
    <Card>
      <Filter yearValue={filteredYear} onChangeProp={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpense} />
      {expensesContent}
    </Card>
  );
}

export default Expense;

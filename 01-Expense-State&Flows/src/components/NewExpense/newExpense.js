import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default newExpense;

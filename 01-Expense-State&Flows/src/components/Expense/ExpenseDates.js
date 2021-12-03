function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-EN", { day: "2-digit" });
  const month = props.date.toLocaleString("en-EN", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <h3>{day} </h3>
      <h3>{month} </h3>
      <h3>{year} </h3>
    </div>
  );
}

export default ExpenseDate;

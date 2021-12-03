import "./filter.css";

const Filter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeProp(event.target.value);
  };
  return (
    <div>
      <form className="filter">
        <label>Enter Year</label>
        <select
          value={props.filteredYear}
          onChange={dropDownChangeHandler}
          name="year"
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;

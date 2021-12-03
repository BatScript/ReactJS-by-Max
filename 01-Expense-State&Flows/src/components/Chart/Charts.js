import "./Chart.css";
import Chartbar from "./Chartbars";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((val) => val.value);
  console.log(dataPointValues);

  const totalMaximum = Math.max(...dataPointValues);

  console.log(totalMaximum);

  return (
    <div className="chart">
      {props.dataPoints.map((val) => (
        <Chartbar
          value={val.value}
          maxValue={totalMaximum}
          label={val.label}
          key={val.label}
        />
      ))}
    </div>
  );
};

export default Chart;

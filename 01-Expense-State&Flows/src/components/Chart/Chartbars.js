import "./Chartbar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(props);

  return (
    <div className="chartbar">
      <div className="chartbarInner">
        <div className="chartbarFill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartbarLabel">{props.label}</div>
    </div>
  );
};

export default ChartBar;

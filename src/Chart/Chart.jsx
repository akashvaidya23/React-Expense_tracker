import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValue = dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMax = Math.max(...dataPointValue);
  return (
    <>
      <div className="chart">
        {dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMax}
              label={dataPoint.label}
            />
          );
        })}
      </div>
    </>
  );
};

export default Chart;

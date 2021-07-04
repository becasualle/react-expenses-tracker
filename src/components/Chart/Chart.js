import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

// get chartDataPoints as props
const Chart = props => {
    // get array of numbers[0, 0, 0, 132, 37, 0]  instead of array of objects [{label, value},{}...]
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // add each value as argument for Math.max and find max value for showing 100% filled chartbar and calculate fill value for other chartbars
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {/* for each datapoint create chartbar JSX code */}
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label} 
                />)
            )}
        </div>
    );
};

export default Chart;

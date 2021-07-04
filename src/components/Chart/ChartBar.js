import React from 'react';
import './ChartBar.css';

// props = {key,value,maxValue, label}
const ChartBar = props => {
    
    // set height of chartbar fill = 0% by default
    let barFillHeight = '0%';
    // if there is at least one expense calculate height for current element relative to max amount value
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* set dynamic style - height using calculate variable */}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;

import React from 'react';
import Chart from '../Chart/Chart';

// props -> expenses = filteredExpenses array (contains only expenses in selected year)
const ExpensesChart = props => {
    // create default data points for building chart
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    // get every expense in filtered expenses array and add value of it's expense amount to chartDataPoints.value
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //starting at 0, can use as index later
        // select month of expense and add value to it
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    // build chart using data points
    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

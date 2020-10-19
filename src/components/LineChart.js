import React from 'react'
import { Line } from 'react-chartjs-2'
import './chart.css'
function LineChart() {
    const data = {
        labels: ['muharam', 'safer', 'rabiulawal', 'rabiusani', 'jamadiuawal', 'jamadiusani'],
        datasets: [
            {
                label: 'sales in 2010 (M)',
                data: [3, 2, 5, 2, 6, 4],
                borderColor: ' #9b93ee',
                backgroundColor: '#bbb7e6',
                pointBackgroundColor: 'white',
                pointBorderColor: '#3030b4'
            }, {
                label: 'sales in 2011 (M)',
                data: [1, 3, 3, 4, 4, 7],
                borderColor: '#6ff2a1 ',
                backgroundColor: '#aaf0c5',
                pointBackgroundColor: '#71bdbd',
                pointBorderColor: 'green'
            }, {
                label: 'sales in 2012 (M)',
                data: [5, 1, 4, 5, 7, 6],
                borderColor: '#f7ee5c ',
                backgroundColor: '#e8e38c',
                pointBackgroundColor: '#a6ac3a',
                pointBorderColor: 'yellow'
            }
        ]
    }
    const option = {
        title:{
            display : true,
            text : 'Line Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:8,
                        stepSize:1
                    }
                }
            ]
        }
    }
    return (
        <div className="LineChart">
            <Line data={data} options={option}/>
        </div>
    )
}

export default LineChart

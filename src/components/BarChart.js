import React from 'react'
import { Bar } from 'react-chartjs-2'
import './chart.css'
function BarChart() {
    const data = {
        labels: ['muharam', 'safer', 'rabiulawal', 'rabiusani', 'jamadiuawal', 'jamadiusani'],
        datasets: [
            {
                label: 'sales in 2010 (M)',
                data: [3, 2, 5, 2, 6, 4],
                borderColor: ' #9b93ee',
                backgroundColor: '#bbb7e6'
               
            }, {
                label: 'sales in 2011 (M)',
                data: [1, 3, 3, 4, 4, 7],
                borderColor: '#6ff2a1 ',
                backgroundColor: '#aaf0c5'
            }, {
                label: 'sales in 2012 (M)',
                data: [5, 1, 4, 5, 7, 6],
                borderColor: '#f7ee5c ',
                backgroundColor: '#e8e38c'
            }
        ]
    }
    const option = {
        title:{
            display : true,
            text : 'Bar Chart'
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
        <div className="BarChart">
            <Bar data={data} options={option}/>
        </div>
    )
}

export default BarChart
